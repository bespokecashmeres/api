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

module.exports.getProductCostCalculationsDetails = async (id, size = "xs") => {
  const pipeline = [
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id),
      }
    },
    {
      $lookup: {
        from: "yarns",
        localField: "yarn",
        foreignField: "_id",
        as: "yarnDetails"
      }
    },
    {
      $unwind: { path: "$yarnDetails", preserveNullAndEmptyArrays: true }
    },
    {
      $lookup: {
        from: "materials",
        localField: "yarnDetails.materialId",
        foreignField: "_id",
        as: "materialDetails"
      }
    },
    {
      $unwind: { path: "$materialDetails", preserveNullAndEmptyArrays: true }
    },
    {
      $lookup: {
        from: "steptypes",
        localField: "steps.stepType",
        foreignField: "_id",
        as: "stepTypes"
      }
    },
    {
      $lookup: {
        from: "stepcards",
        localField: "steps.stepCard",
        foreignField: "_id",
        as: "stepCards"
      }
    },
    {
      $project: {
        materialPrice: "$materialDetails.price",
        steps: {
          $arrayToObject: {
            $filter: {
              input: {
                $map: {
                  input: "$steps",
                  as: "step",
                  in: {
                    k: {
                      $let: {
                        vars: {
                          matchedType: {
                            $first: {
                              $filter: {
                                input: "$stepTypes",
                                cond: { $eq: ["$$this._id", "$$step.stepType"] }
                              }
                            }
                          }
                        },
                        in: "$$matchedType.slug"
                      }
                    },
                    v: {
                      $let: {
                        vars: {
                          matchedCard: {
                            $first: {
                              $filter: {
                                input: "$stepCards",
                                cond: { $eq: ["$$this._id", "$$step.stepCard"] }
                              }
                            }
                          }
                        },
                        in: "$$matchedCard.slug"
                      }
                    }
                  }
                }
              },
              as: "pair",
              cond: { $and: [{ $ne: ["$$pair.k", null] }, { $ne: ["$$pair.v", null] }] }
            }
          }
        }
      }
    }
  ];

  const data = await database.aggregate(pipeline);
  return data ? data[0] : null;
}

module.exports.getProductDetails = async (id, language = DEFAULT_LOCALE) => {
  const pipeline = [
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id),
      },
    },
    {
      $addFields: {
        relatedProducts: {
          $map: {
            input: "$relatedProducts",
            as: "relatedProduct",
            in: { $toObjectId: "$$relatedProduct" },
          },
        },
      }
    },
    {
      $lookup: {
        from: "genders",
        localField: "genderId",
        foreignField: "_id",
        as: "genderInfo",
      },
    },
    { $unwind: { path: "$genderInfo", preserveNullAndEmptyArrays: true } },
    {
      $lookup: {
        from: "producttemplates",
        localField: "relatedProducts",
        foreignField: "_id",
        as: "relatedProductsDetails"
      }
    },
    {
      $project: {
        title: `$title.${language}`,
        basePriceXs: 1,
        images: 1,
        gender: {
          $ifNull: ["$genderInfo.slug", ""],
        },
        contents: {
          $map: {
            input: "$contents",
            as: "content",
            in: {
              title: `$$content.title.${language}`,
              description: `$$content.description.${language}`,
            },
          },
        },
        relatedProducts: {
          $map: {
            input: "$relatedProductsDetails",
            as: "product",
            in: {
              _id: "$$product._id",
              title: `$$product.title.${language}`,
              image: { $arrayElemAt: ["$$product.images", 0] },
              basePriceXs: "$$product.basePriceXs"
            }
          }
        }
      }
    }
  ];

  console.log(JSON.stringify(pipeline));
  const data = await database.aggregate(pipeline);
  return data ? data[0] : null;
}
