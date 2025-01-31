const { success } = require("../../../../utils/response");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");

const {
  HomeCreate,
  HomeUpdate,
  FindHome,
  DeleteHome,
  HomeExist,
  fetchOurStory,
} = require("./dbQuery");

const { uploadToS3, deleteFromS3 } = require("../../../../utils/fileUploads");

exports.CreateHomeCtrl = async (req, res) => {
  //section 1

  if (req.body?.section1?.title) {
    try {
      req.body.section1.title = JSON.parse(req.body.section1.title);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  

 



  if (req?.files) {
    const image = req.files?.["section1[bg_image]"]
      ? req.files["section1[bg_image]"][0]
      : null;
    if (image) {
      try {
        req.body.section1.bg_image = await uploadToS3(image, "home/section1");
      } catch (error) {
        console.error("Home Image upload failed:", error);
      }
    }
  }


  //section-2


 if(req.body?.section2?.title){
  try {
    req.body.section2.title = req.body.section2.title ? JSON.parse(req.body.section2.title) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }


 if(req.body?.section2?.description){
  try {
    req.body.section2.description = req.body.section2.description ? JSON.parse(req.body.section2.description) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }


  if (req.files) {
    const image = req.files?.["section2[bg_image]"]
      ? req.files["section2[bg_image]"][0]
      : null;
    if (image) {
      try {
        req.body.section2.bg_image = await uploadToS3(image, "home/section2");
      } catch (error) {
        console.error("Home Image upload failed:", error);
      }
    }
  }



  if (req.files) {
    const image = req.files?.["section2[left_image]"]
      ? req.files["section2[left_image]"][0]
      : null;
    if (image) {
      try {
        req.body.section2.left_image = await uploadToS3(image, "home/section2");
      } catch (error) {
        console.error("Home Image upload failed:", error);
      }
    }
  }



  //sectionN-string


  if(req.body?.sectionNString?.title){
    try {
      req.body.sectionNString.title = req.body.sectionNString.title ? JSON.parse(req.body.sectionNString.title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
   }


  //section-3:

  if (req.body?.section3?.length) {
    for (const [index, home] of req.body.section3.entries()) {
      if (home.title) {
        home.title = JSON.parse(home.title);
      }
    }
  }



  if (req.files) {
    const imageUploadPromise = [];
    if (req.body?.section3?.length) {
      for (const [index, home] of req.body?.section3?.entries()) {
        if (req.files[`section3[${index}][image]`]) {
          const singleImageFile = req.files[`section3[${index}][image]`][0];
          try {
            if (singleImageFile) {
              imageUploadPromise.push(
                uploadToS3(singleImageFile, "home/section3").then((imageUrl) => {
                  req.body.section3[index].image = imageUrl;
                })
              );
            }
          } catch (err) {
            console.error("Stories Images upload failed:", err);
          }
        }
      }
    }
    if (imageUploadPromise.length) {
      try {
        await Promise.allSettled(imageUploadPromise).then();
      } catch (err) {
        console.log("imageUploadPromise error", err);
      }
    }
  }



  //section-4:

 if(req.body?.section4?.title){
  try {
    req.body.section4.title = req.body.section4.title ? JSON.parse(req.body.section4.title) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }



 if(req.body?.section4?.description){
  try {
    req.body.section4.description = req.body.section4.description ? JSON.parse(req.body.section4.description) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }


  if (req.body?.section4?.cards?.length) {
    for (const [index, home] of req.body.section4.cards.entries()) {
      if (home.title1) {
        home.title1 = JSON.parse(home.title1);
      }
      if(home.title2){
        home.title2 = JSON.parse(home.title2);
      }
      if(home.button_text){
        home.button_text = JSON.parse(home.button_text);
      }
    }
  }


  if (req.files) {
    const imageUploadPromise = [];
    if (req.body?.section4?.cards?.length) {
      for (const [index] of req.body?.section4?.cards?.entries()) {
        if (req.files[`section4[cards][${index}][bg_image]`]) {
          const singleImageFile =
            req.files[`section4[cards][${index}][bg_image]`][0];
          try {
            if (singleImageFile) {
              imageUploadPromise.push(
                uploadToS3(singleImageFile, "home/section4").then(
                  (imageUrl) => {
                    req.body.section4.cards[index].bg_image = imageUrl;
                  }
                )
              );
            }
          } catch (err) {
            console.error("Stories Images upload failed:", err);
          }
        }
      }
    }
    if (imageUploadPromise.length) {
      try {
        await Promise.allSettled(imageUploadPromise).then();
      } catch (err) {
        console.log("imageUploadPromise error", err);
      }
    }
  }


  //section 5

  if(req.body?.section5?.title){
    try {
      req.body.section5.title = req.body.section5.title ? JSON.parse(req.body.section5.title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }




  //  //section-6

  if(req.body?.section6?.title){
    try {
      req.body.section6.title = req.body.section6.title ? JSON.parse(req.body.section6.title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if (req.body?.section6?.cards?.length) {
    for (const [index, home] of req.body.section6.cards.entries()) {
      if (home.button_text) {
        home.button_text = JSON.parse(home.button_text);
      }
    }
  }


  if (req.files) {
    const imageUploadPromise = [];
    if (req.body?.section6?.cards?.length) {
      for (const [index] of req.body?.section6?.cards?.entries()) {
        if (req.files[`section6[cards][${index}][image]`]) {
          const singleImageFile =
            req.files[`section6[cards][${index}][image]`][0];
          try {
            if (singleImageFile) {
              imageUploadPromise.push(
                uploadToS3(singleImageFile, "home/section6").then(
                  (imageUrl) => {
                    req.body.section6.cards[index].image = imageUrl;
                  }
                )
              );
            }
          } catch (err) {
            console.error("Stories Images upload failed:", err);
          }
        }
      }
    }
    if (imageUploadPromise.length) {
      try {
        await Promise.allSettled(imageUploadPromise).then();
      } catch (err) {
        console.log("imageUploadPromise error", err);
      }
    }
  }



  //  //section-7  

  if(req.body?.section7?.title){
    try {
      req.body.section7.title = req.body.section7.title ? JSON.parse(req.body.section7.title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if(req.body?.section7?.sub_title){
    try {
      req.body.section7.sub_title = req.body.section7.sub_title ? JSON.parse(req.body.section7.sub_title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }


  // if(req.body?.section7?.cards?.length){
  //   const data = await fetchOurStory();
  //   for(let i=0; i<data.length; i++){
  //     req.body.section7.cards[i].title = data[i].title
  //     req.body.section7.cards[i].description = data[i].sub_title
  //     req.body.section7.cards[i].image = data[i].thumb_image
  //   }
  // }







  //sectioin - 8

 if(req.body?.section8?.title){
  try {
    req.body.section8.title = req.body.section8.title ? JSON.parse(req.body.section8.title) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }


  //card 1
 if(req.body?.section8?.card1?.title){
  try {
    req.body.section8.card1.title = req.body.section8.card1.title ? JSON.parse(req.body.section8.card1.title) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }

  if(req.body?.section8?.card1?.sub_title){
    try {
      req.body.section8.card1.sub_title = req.body.section8.card1.sub_title ? JSON.parse(req.body.section8.card1.sub_title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if(req.body?.section8?.card1?.description){
    try {
      req.body.section8.card1.description = req.body.section8.card1.description ? JSON.parse(req.body.section8.card1.description) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

 if(req.body?.section8?.card1?.button_text){
  try {
    req.body.section8.card1.button_text = req.body.section8.card1.button_text ? JSON.parse(req.body.section8.card1.button_text) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }

 
  if (req.files) {
    const image = req.files?.["section8[card1][first_image]"]
      ? req.files["section8[card1][first_image]"][0]
      : null;
    if (image) {
      try {
        req.body.section8.card1.first_image = await uploadToS3(
          image,
          "home/section8"
        );
      } catch (error) {
        console.error("Home Image upload failed:", error);
      }
    }
  }


  if (req.files) {
    const image = req.files?.["section8[card1][second_image]"]
      ? req.files["section8[card1][second_image]"][0]
      : null;
    if (image) {
      try {
        req.body.section8.card1.second_image = await uploadToS3(
          image,
          "home/section8"
        );
      } catch (error) {
        console.error("Home Image upload failed:", error);
      }
    }
  }

  //card 2

  if(req.body?.section8?.card2?.title){
    try {
      req.body.section8.card2.title = req.body.section8.card2.title ? JSON.parse(req.body.section8.card2.title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if(req.body?.section8?.card2?.sub_title){
    try {
      req.body.section8.card2.sub_title = req.body.section8.card2.sub_title ? JSON.parse(req.body.section8.card2.sub_title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if(req.body?.section8?.card2?.description){
    try {
      req.body.section8.card2.description = req.body.section8.card2.description ? JSON.parse(req.body.section8.card2.description) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if(req.body?.section8?.card2?.button_text){
    try {
      req.body.section8.card2.button_text = req.body.section8.card2.button_text ? JSON.parse(req.body.section8.card2.button_text) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if (req.files) {
    const image = req.files?.["section8[card2][image]"]
      ? req.files["section8[card2][image]"][0]
      : null;
    if (image) {
      try {
        req.body.section8.card2.image = await uploadToS3(
          image,
          "home/section8"
        );
      } catch (error) {
        console.error("Home Image upload failed:", error);
      }
    }
  }


  //card3

  if(req.body?.section8?.card3?.title){
    try {
      req.body.section8.card3.title = req.body.section8.card3.title ? JSON.parse(req.body.section8.card3.title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

 if(req.body?.section8?.card3?.sub_title){
  try {
    req.body.section8.card3.sub_title = req.body.section8.card3.sub_title ? JSON.parse(req.body.section8.card3.sub_title) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }

 if(req.body?.section8?.card3?.description){
  try {
    req.body.section8.card3.description = req.body.section8.card3.description ? JSON.parse(req.body.section8.card3.description) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }

  if(req.body?.section8?.card3?.button_text){
    try {
      req.body.section8.card3.button_text = req.body.section8.card3.button_text ? JSON.parse(req.body.section8.card3.button_text) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if (req.files) {
    const image = req.files?.["section8[card3][image]"]
      ? req.files["section8[card3][image]"][0]
      : null;
    if (image) {
      try {
        req.body.section8.card3.image = await uploadToS3(
          image,
          "home/section8"
        );
      } catch (error) {
        console.error("Home Image upload failed:", error);
      }
    }
  }

  //section 9 


  if(req.body?.section9?.title){
    try {
      req.body.section9.title = req.body.section9.title ? JSON.parse(req.body.section9.title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if(req.body?.section9?.description){
    try {
      req.body.section9.description = req.body.section9.description ? JSON.parse(req.body.section9.description) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if(req.body?.section9?.link_text){
    try {
      req.body.section9.link_text = req.body.section9.link_text ? JSON.parse(req.body.section9.link_text) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }


  if (req.files) {
    const image = req.files?.["section9[bg_image]"]
      ? req.files["section9[bg_image]"][0]
      : null;
    if (image) {
      try {
        req.body.section9.bg_image = await uploadToS3(image, "home/section9");
      } catch (error) {
        console.error("Home Image upload failed:", error);
      }
    }
  }

  if (req.files) {
    const image = req.files?.["section9[left_image]"]
      ? req.files["section9[left_image]"][0]
      : null;

    if (image) {
      try {
        req.body.section9.left_image = await uploadToS3(image, "home/section9");
      } catch (error) {
        console.error("Home Image upload failed:", error);
      }
    }
  }



  const data = await HomeCreate(req.body);
  if (!data) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.HOME_EXIST),
    };
  }
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.HOME_CREATED),
      data
    )
  );
};


exports.updateHomeController = async (req,res) => {

  const { _id } = req.body;

  // Fetch the existing record
  const isExsist = await FindHome(_id);
  if (!isExsist) {
    throw {
      code: httpStatusCodes.UNPROCESSABLE_ENTITY,
      message: res.__(serverResponseMessage.RECORD_DOES_NOT_EXISTS),
    };
  }

  console.log(req.files);

  //Store all urls to bulk delete from s3
  const deletedImages = [];



  //section 1


  if (req.body?.section1?.title) {
    try {
      req.body.section1.title = JSON.parse(req.body.section1.title);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }




  if (req.files?.["section1[bg_image]"]) {
    const image = req.files["section1[bg_image]"][0];
    try {
      req.body.section1.bg_image = await uploadToS3(image, "home/section1");
      if (isExsist?.section1?.bg_image) {
        deletedImages.push(isExsist.section1.bg_image); // Add old image for deletion
      }
    } catch (error) {
      console.error("Main image upload failed:", error);
    }
  } else {
    // If no new image is uploaded, retain the existing image
    req.body.section1.bg_image = isExsist?.section1?.bg_image || "";
  }


  //section 2


  if (req.body?.section2?.title) {
    try {
      req.body.section2.title = JSON.parse(req.body.section2.title);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if (req.body?.section2?.description) {
    try {
      req.body.section2.description = JSON.parse(req.body.section2.description);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if (req.files?.["section2[bg_image]"]) {
    const image = req.files["section2[bg_image]"][0];
    try {
      req.body.section2.bg_image = await uploadToS3(image, "home/section2");
      if (isExsist?.section2?.bg_image) {
        deletedImages.push(isExsist.section2.bg_image); // Add old image for deletion
      }
    } catch (error) {
      console.error("Main image upload failed:", error);
    }
  } else {
    // If no new image is uploaded, retain the existing image
    req.body.section2.bg_image = isExsist?.section2?.bg_image || "";
  }


  if (req.files?.["section2[left_image]"]) {
    const image = req.files["section2[left_image]"][0];
    try {
      req.body.section2.left_image = await uploadToS3(image, "home/section2");
      if (isExsist?.section2?.bg_image) {
        deletedImages.push(isExsist.section2.left_image); // Add old image for deletion
      }
    } catch (error) {
      console.error("Main image upload failed:", error);
    }
  } else {
    // If no new image is uploaded, retain the existing image
    req.body.section2.left_image = isExsist?.section2?.left_image || "";
  }


  //sectionNString

  if (req.body?.sectionNString?.title) {
    try {
      req.body.sectionNString.title = JSON.parse(req.body.sectionNString.title);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }



  //section 3

 

  const imageUploadPromise = [];
  if (req.body?.section3?.length) {
    console.log("step 1")
    for (const [index, yarn] of req.body?.section3?.entries()) {
      console.log("step 2",yarn);
      const newImage = req.files?.[`section3[${index}][image]`]?.[0];
      console.log("step 3",newImage);
      if (newImage) {
        try {
          imageUploadPromise.push(
            uploadToS3(newImage, "home/section3").then((imageUrl) => {
              yarn.image = imageUrl;
              console.log("step 4",imageUrl);
            })
          );
          const oldImageUrl = isExsist?.section3?.[index]?.image;
          if (oldImageUrl) {
            deletedImages.push(oldImageUrl);
          }
        } catch (err) {
          console.error("Yarn Images upload failed:", err);
        }
      } else {
        yarn.image = isExsist?.yarns?.[index]?.image ?? "";
      }
    }
  }

  if (req.body?.section3?.length) {
    for (const [index, yarn] of req.body.section3.entries()) {
      if (yarn.title) {
        yarn.title = JSON.parse(yarn.title);
      }
    }
  }


  //section 4

  if (req.body?.section4?.title) {
    try {
      req.body.section4.title = JSON.parse(req.body.section4.title);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }


  if (req.body?.section4?.description) {
    try {
      req.body.section4.description = JSON.parse(req.body.section4.description);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }


  if (req.body?.section4?.cards?.length) {
    console.log("step 1")
    for (const [index, yarn] of req.body?.section4?.cards?.entries()) {
      console.log("step 2",yarn);
      const newImage = req.files?.[`section4[cards][${index}][bg_image]`]?.[0];
      console.log("step 3",newImage);
      if (newImage) {
        try {
          imageUploadPromise.push(
            uploadToS3(newImage, "home/section4").then((imageUrl) => {
              yarn.bg_image = imageUrl;
              console.log("step 4",imageUrl);
            })
          );
          const oldImageUrl = isExsist?.section4?.cards[index]?.bg_image;
          if (oldImageUrl) {
            deletedImages.push(oldImageUrl);
          }
        } catch (err) {
          console.error("Yarn Images upload failed:", err);
        }
      } else {
        yarn.bg_image = isExsist?.section4.cards?.[index]?.bg_image ?? "";
      }
    }
  }

  if (req.body?.section4?.cards?.length) {
    for (const [index, yarn] of req.body.section4.cards.entries()) {
      if (yarn.title1) {
        yarn.title1 = JSON.parse(yarn.title1);
      }
      if (yarn.title2) {
        yarn.title2 = JSON.parse(yarn.title2);
      }
      if (yarn.button_text) {
        yarn.button_text = JSON.parse(yarn.button_text);
      }
    }
  }


  //section 5

  if (req.body?.section5?.title) {
    try {
      req.body.section5.title = JSON.parse(req.body.section5.title);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }


  //section 6


  if (req.body?.section6?.title) {
    try {
      req.body.section6.title = JSON.parse(req.body.section6.title);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }


  if (req.body?.section6?.cards?.length) {
    console.log("step 1")
    for (const [index, yarn] of req.body?.section6?.cards?.entries()) {
      console.log("step 2",yarn);
      const newImage = req.files?.[`section6[cards][${index}][image]`]?.[0];
      console.log("step 3",newImage);
      if (newImage) {
        try {
          imageUploadPromise.push(
            uploadToS3(newImage, "home/section6").then((imageUrl) => {
              console.log("step A",yarn?.image);
              yarn.image = imageUrl;
              console.log("step 4",imageUrl);
            })
          );
          const oldImageUrl = isExsist?.section6?.cards[index]?.image;
          if (oldImageUrl) {
            deletedImages.push(oldImageUrl);
          }
        } catch (err) {
          console.error("Yarn Images upload failed:", err);
        }
      } else {
        yarn.image = isExsist?.section6.cards?.[index]?.image ?? "";
      }
    }
  }

  if (req.body?.section6?.cards?.length) {
    for (const [index, yarn] of req.body.section6.cards.entries()) {
      if (yarn.button_text) {
        yarn.button_text = JSON.parse(yarn.button_text);
      }
      
    }
  }


  // //section 7

  if (req.body?.section7?.title) {
    try {
      req.body.section7.title = JSON.parse(req.body.section7.title);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if (req.body?.section7?.sub_title) {
    try {
      req.body.section7.sub_title = JSON.parse(req.body.section7.sub_title);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }



  // if(req.body?.section7){
  //   const data = await fetchOurStory();
  //   console.log("step A ",data);
  //   for(let i=0; i<data.length; i++){
  //     console.log("step AA")
  //     req.body.section7.cards[i].title = data[i].title
  //     console.log("step AB")
  //     req.body.section7.cards[i].description = data[i]?.sub_title
  //     console.log("step Ac")
  //     req.body.section7.cards[i].image = data[i]?.thumb_image
  //     console.log("step AD")
  //   }
  // }
    

    // console.log("step B");
    // console.log(req.body.section7);



  //section 8

  if (req.body?.section8?.title) {
    try {
      req.body.section8.title = JSON.parse(req.body.section8.title);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }


//   //card 1

  if(req.body?.section8?.card1?.title){
    try {
      req.body.section8.card1.title = req.body.section8.card1.title ? JSON.parse(req.body.section8.card1.title) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
   }
  
    if(req.body?.section8?.card1?.sub_title){
      try {
        req.body.section8.card1.sub_title = req.body.section8.card1.sub_title ? JSON.parse(req.body.section8.card1.sub_title) : {};
      } catch (error) {
        throw {
          code: httpStatusCodes.BAD_REQUEST,
          message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
        };
      }
    }
  
    if(req.body?.section8?.card1?.description){
      try {
        req.body.section8.card1.description = req.body.section8.card1.description ? JSON.parse(req.body.section8.card1.description) : {};
      } catch (error) {
        throw {
          code: httpStatusCodes.BAD_REQUEST,
          message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
        };
      }
    }
  
   if(req.body?.section8?.card1?.button_text){
    try {
      req.body.section8.card1.button_text = req.body.section8.card1.button_text ? JSON.parse(req.body.section8.card1.button_text) : {};
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
   }

  if (req.files?.["section8[card1][first_image]"]) {
    const image = req.files["section8[card1][first_image]"][0];
    try {
      req.body.section8.card1.first_image = await uploadToS3(image, "home/section8");
      if (isExsist?.section8?.card1?.first_image) {
        deletedImages.push(isExsist.section8.card1.first_image); // Add old image for deletion
      }
    } catch (error) {
      console.error("Main image upload failed:", error);
    }
  } else {
    // If no new image is uploaded, retain the existing image
    req.body.section8.card1.first_image = isExsist?.section8?.card1?.first_image || "";
  }


  if (req.files?.["section8[card1][second_image]"]) {
    const image = req.files["section8[card1][second_image]"][0];
    try {
      req.body.section8.card1.second_image = await uploadToS3(image, "home/section8");
      if (isExsist?.section8?.card1?.second_image) {
        deletedImages.push(isExsist.section8.card1.second_image); // Add old image for deletion
      }
    } catch (error) {
      console.error("Main image upload failed:", error);
    }
  } else {
    // If no new image is uploaded, retain the existing image
    req.body.section8.card1.second_image = isExsist?.section8?.card1?.second_image || "";
  }

//   //card 2


if(req.body?.section8?.card2?.title){
  try {
    req.body.section8.card2.title = req.body.section8.card2.title ? JSON.parse(req.body.section8.card2.title) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }

 if(req.body?.section8?.card2?.sub_title){
  try {
    req.body.section8.card2.sub_title = req.body.section8.card2.sub_title ? JSON.parse(req.body.section8.card2.sub_title) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }

 if(req.body?.section8?.card2?.description){
  try {
    req.body.section8.card2.description = req.body.section8.card2.description ? JSON.parse(req.body.section8.card2.description) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }

 if(req.body?.section8?.card2?.button_text){
  try {
    req.body.section8.card2.button_text = req.body.section8.card2.button_text ? JSON.parse(req.body.section8.card2.button_text) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }

  if (req.files?.["section8[card2][image]"]) {
    const image = req.files["section8[card2][image]"][0];
    try {
      req.body.section8.card2.image = await uploadToS3(image, "home/section8");
      if (isExsist?.section8?.card2?.image) {
        deletedImages.push(isExsist.section8.card2.image); // Add old image for deletion
      }
    } catch (error) {
      console.error("Main image upload failed:", error);
    }
  } else {
    // If no new image is uploaded, retain the existing image
    req.body.section8.card2.image = isExsist?.section8?.card2?.image || "";
  }


//   //card 3


if(req.body?.section8?.card3?.title){
  try {
    req.body.section8.card3.title = req.body.section8.card3.title ? JSON.parse(req.body.section8.card3.title) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }

 if(req.body?.section8?.card3?.sub_title){
  try {
    req.body.section8.card3.sub_title = req.body.section8.card3.sub_title ? JSON.parse(req.body.section8.card3.sub_title) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }

 if(req.body?.section8?.card3?.description){
  try {
    req.body.section8.card3.description = req.body.section8.card3.description ? JSON.parse(req.body.section8.card3.description) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }

 if(req.body?.section8?.card3?.button_text){
  try {
    req.body.section8.card3.button_text = req.body.section8.card3.button_text ? JSON.parse(req.body.section8.card3.button_text) : {};
  } catch (error) {
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
    };
  }
 }



  if (req.files?.["section8[card3][image]"]) {
    const image = req.files["section8[card3][image]"][0];
    try {
      req.body.section8.card3.image = await uploadToS3(image, "home/section8");
      if (isExsist?.section3?.card2?.image) {
        deletedImages.push(isExsist.section8.card3.image); // Add old image for deletion
      }
    } catch (error) {
      console.error("Main image upload failed:", error);
    }
  } else {
    // If no new image is uploaded, retain the existing image
    req.body.section8.card3.image = isExsist?.section8?.card3?.image || "";
  }


  //section 9

  if (req.body?.section9?.title) {
    try {
      req.body.section9.title = JSON.parse(req.body.section9.title);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }


  if (req.body?.section9?.description) {
    try {
      req.body.section9.description = JSON.parse(req.body.section9.description);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if (req.body?.section9?.link_text) {
    try {
      req.body.section9.link_text = JSON.parse(req.body.section9.link_text);
    } catch (error) {
      throw {
        code: httpStatusCodes.BAD_REQUEST,
        message: res.__(serverResponseMessage.INVALID_MULTILINGUAL_DATA),
      };
    }
  }

  if (req.files?.["section9[left_image]"]) {
    const image = req.files["section9[left_image]"][0];
    try {
      req.body.section9.left_image = await uploadToS3(image, "home/section9");
      if (isExsist?.section9?.left_image) {
        deletedImages.push(isExsist.section9.left_image); // Add old image for deletion
      }
    } catch (error) {
      console.error("Main image upload failed:", error);
    }
  } else {
    // If no new image is uploaded, retain the existing image
    req.body.section9.left_image = isExsist?.section9?.left_image || "";
  }

  

  if (req.files?.["section9[bg_image]"]) {
    const image = req.files["section9[bg_image]"][0];
    try {
      req.body.section9.bg_image = await uploadToS3(image, "home/section9");
      if (isExsist?.section9?.bg_image) {
        deletedImages.push(isExsist.section9.bg_image); // Add old image for deletion
      }
    } catch (error) {
      console.error("Main image upload failed:", error);
    }
  } else {
    // If no new image is uploaded, retain the existing image
    req.body.section9.bg_image = isExsist?.section9?.bg_image || "";
  }











  if (imageUploadPromise.length) {
    try {
      await Promise.allSettled(imageUploadPromise);
    } catch (err) {
      console.log("imageUploadPromise error", err);
    }
  }

  // Identify and delete removed yarns' images
  // const yarnIdsInRequest = new Set(
  //   req.body?.yarns?.map((yarn) => yarn.uuid) ?? []
  // );
  // const removedYarns =
  //   isExsist?.yarns?.filter((yarn) => !yarnIdsInRequest.has(yarn.uuid)) ?? [];
  // removedYarns.forEach((yarn) => {
  //   if (yarn.image) {
  //     deletedImages.push(yarn.image); // Queue the old image for deletion
  //   }
  // });

  console.log("deleted images : ",deletedImages);

  // Perform bulk image deletions
  if (deletedImages.length) {
    try {
      await Promise.allSettled(
        deletedImages.map((image) => deleteFromS3(image))
      );
    } catch (err) {
      console.error("Image deletion failed:", err);
    }
  }

  // Update the record with the new data (including yarns)
  const updatedRecord = await HomeUpdate(req.body);

  // Return success response
  return res
    .status(httpStatusCodes.SUCCESS)
    .json(
      success(
        httpStatusCodes.SUCCESS,
        httpResponses.SUCCESS,
        res.__(serverResponseMessage.RECORD_UPDATED),
        updatedRecord
      )
    );
}



exports.GetHomeCtrl = async (req, res) => {
  const data = await HomeExist();
  if(!data){
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.HOME_NOT_EXIST),
    };
  }
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.HOME_FETCHED),
      data
    )
  );
};


exports.GetHomeOurStory = async (req, res) => {

  const ourStoryData = await fetchOurStory();
  
  return res.json(
    success(
      httpStatusCodes.SUCCESS,
      httpResponses.SUCCESS,
      res.__(serverResponseMessage.RECORD_FETCHED),
      ourStoryData
    )
  );
};

// exports.deleteHomeCtrl = async (req, res) => {
//   const {_id} = req.params;
//   const data = await DeleteHome(_id);

//   if(!data){
//     throw {
//       code: httpStatusCodes.BAD_REQUEST,
//       message: res.__(serverResponseMessage.HOME_NOT_EXIST),
//     };
//   }
//   return res.json(
//     success(
//       httpStatusCodes.SUCCESS,
//       httpResponses.SUCCESS,
//       res.__(serverResponseMessage.HOME_DELETED),
//       data
//     )
//   );
// };
