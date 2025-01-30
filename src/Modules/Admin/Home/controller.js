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
      if (home.title) {
        home.title = JSON.parse(home.title);
      }
      if(home.description){
        home.description = JSON.parse(home.description);
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


  if(req.body?.section7?.cards?.length){
    const data = await fetchOurStory();
    for(let i=0; i<data.length; i++){
      req.body.section7.cards[i].title = data[i].title
      req.body.section7.cards[i].description = data[i].sub_title
      req.body.section7.cards[i].image = data[i].thumb_image
    }
  }







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

  const isExsist = await HomeExist(req.body._id);
  if(!isExsist){
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.HOME_EXIST),
    };
  }

  console.log("step 1",req.body);
  console.log("files : ",req.files);
  // console.log("is Exist ",isExsist);



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

  const deletedImages = [];

  if (req.files?.section1?.bg_image) {
    const image = req.files.section1["bg_image"][0];
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

  console.log("step 2",req.body);

  console.log("deleted images ",deletedImages);


  const data = await HomeUpdate(req.body);
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
      res.__(serverResponseMessage.HOME_UPDATED ),
      data
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
