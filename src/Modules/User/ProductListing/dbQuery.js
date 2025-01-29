const { default: mongoose } = require("mongoose");
const { DEFAULT_LOCALE } = require("../../../../utils/constants");
const database = require("../../Admin/ProductTemplate/schema");
const { findOneRecord: genderFindOneRecord } = require("../../Admin/Gender/dbQuery");
RegExp.escape = function (s) {
  return s.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

module.exports.getPaginationData = async (qData) => {
  const {
    perPage,
    page,
    sortBy = "createdAt",
    sortOrder = "desc",
    search = "",
    filter = {},
    language = DEFAULT_LOCALE,
  } = qData;

  let { genderId, patternId, materialId, colourId, minPrice, maxPrice, genderSlug, status = true } = filter;

  if (!genderId && genderSlug) {
    const gender = await genderFindOneRecord({ slug: genderSlug });
    if (gender) genderId = gender._id;
  }

  const matchStage = {
    $match: {
      status, // Only fetch active products
      ...(search && { [`title.${language}`]: { $regex: new RegExp(search, "i") } }),
      ...(genderId && { genderId: new mongoose.Types.ObjectId(genderId) }),
      ...(patternId && { patternId: new mongoose.Types.ObjectId(patternId) }),
      ...(materialId && { materialId: new mongoose.Types.ObjectId(materialId) }),
      ...(colourId && { colourId: new mongoose.Types.ObjectId(colourId) }),
      ...(minPrice || maxPrice
        ? { basePriceXs: { ...(minPrice ? { $gte: minPrice } : {}), ...(maxPrice ? { $lte: maxPrice } : {}) } }
        : {}),
    },
  };

  const lookupStages = [
    {
      $lookup: {
        from: "genders",
        localField: "genderId",
        foreignField: "_id",
        as: "gender",
      },
    },
    { $unwind: { path: "$gender", preserveNullAndEmptyArrays: true } },
    {
      $lookup: {
        from: "yarns",
        localField: "yarn",
        foreignField: "_id",
        as: "yarn_info",
      },
    },
    { $unwind: { path: "$yarn_info", preserveNullAndEmptyArrays: true } },
    {
      $lookup: {
        from: "materials",
        localField: "materialId",
        foreignField: "_id",
        as: "material",
      },
    },
    { $unwind: { path: "$material", preserveNullAndEmptyArrays: true } },
    {
      $lookup: {
        from: "colours",
        localField: "colourId",
        foreignField: "_id",
        as: "colour",
      },
    },
    { $unwind: { path: "$colour", preserveNullAndEmptyArrays: true } },
    {
      $lookup: {
        from: "stepcards",
        localField: "patternId",
        foreignField: "_id",
        as: "pattern",
      },
    },
    { $unwind: { path: "$pattern", preserveNullAndEmptyArrays: true } },
  ];

  const projectFields = {
    _id: 1,
    title: `$title.${language}`,
    price: "$basePriceXs",
    image: { $arrayElemAt: ["$images", 0] },
  };

  const pipeline = [
    matchStage,
    ...lookupStages,
    { $project: projectFields },
    {
      $facet: {
        paginatedData: [
          { $sort: { [sortBy]: sortOrder === "desc" ? -1 : 1 } },
          { $skip: (page - 1) * perPage },
          { $limit: perPage },
        ],
        totalCount: [{ $count: "count" }],
        priceRange: [
          {
            $group: {
              _id: null,
              minPrice: { $min: "$price" },
              maxPrice: { $max: "$price" }
            }
          },
          {
            $project: {
              _id: 0,
              minPrice: { $floor: "$minPrice" },
              maxPrice: { $ceil: "$maxPrice" }
            }
          }
        ]
      },
    },
  ];

  const result = await database.aggregate(pipeline);

  const data = result[0].paginatedData;
  const count = result[0].totalCount[0]?.count || 0;
  const priceRange = result[0].priceRange[0] || { minPrice: 0, maxPrice: 0 };

  return {
    currentPage: page,
    totalCount: count,
    totalPage: Math.ceil(count / perPage),
    data,
    minPrice: priceRange.minPrice ?? 0,
    maxPrice: priceRange.maxPrice ?? 0,
  };
};

