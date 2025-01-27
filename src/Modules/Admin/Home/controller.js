const { success } = require("../../../../utils/response");
const { serverResponseMessage } = require("../../../../config/message");
const { httpResponses } = require("../../../../utils/http-responses");
const { httpStatusCodes } = require("../../../../utils/http-status-codes");

const {
  HomeCreate,
  HomeUpdate,
  FindHome,
  DeleteHome,
  HomeExist
} = require("./dbQuery");

const { uploadToS3 } = require("../../../../utils/fileUploads");


exports.CreateHomeCtrl = async (req, res) => {



  const isHomeExist = await HomeExist();
  if(isHomeExist){
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.HOME_EXIST),
    };
  }


  //section-1:bg_image
  if(req.files){
    const image = req.files?.["section1[bg_image]"] ? req.files["section1[bg_image]"][0] : null;
    if (image) {
      try {
        req.body.section1.bg_image = await uploadToS3(image, "home");
      } catch (error) {
        console.error("Home Image upload failed:", error);
      }
    }
  }


   //section-2:bg_image
   if(req.files){
    const image = req.files?.["section2[bg_image]"] ? req.files["section2[bg_image]"][0] : null;
    if (image) {
      try {
        req.body.section2.bg_image = await uploadToS3(image, "home");
      } catch (error) {
        console.error("Home Image upload failed:", error);
      }
    }
  }


   //section-2:left_image
   if(req.files){
    const image = req.files?.["section2[left_image]"] ? req.files["section2[left_image]"][0] : null;
    if (image) {
      try {
        req.body.section2.left_image = await uploadToS3(image, "home");
      } catch (error) {
        console.error("Home Image upload failed:", error);
      }
    }
  }



  //section-3:image array of 4
  if(req.files){
    const imageUploadPromise = [];
    if (req.body?.section3?.length) {
      for (const [index, home] of req.body?.section3?.entries()) {
        if (req.files[`section3[${index}][image]`]) {
          const singleImageFile = req.files[`section3[${index}][image]`][0];
          try {
            if (singleImageFile) {
              imageUploadPromise.push(
                uploadToS3(singleImageFile, "section3").then((imageUrl) => {
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
  


  
  //  //section-4:image array of 5
   if(req.files){
    const imageUploadPromise = [];
    if (req.body?.section4?.cards?.length) {
      for (const [index] of req.body?.section4?.cards?.entries()) {
        if (req.files[`section4[cards][${index}][bg_image]`]) {
          const singleImageFile = req.files[`section4[cards][${index}][bg_image]`][0];
          try {
            if (singleImageFile) {
              imageUploadPromise.push(
                uploadToS3(singleImageFile, "home/section4").then((imageUrl) => {
                  req.body.section4.cards[index].bg_image = imageUrl;
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





   //  //section-6:image array of 7
   if(req.files){
    const imageUploadPromise = [];
    if (req.body?.section6?.cards?.length) {
      for (const [index] of req.body?.section6?.cards?.entries()) {
        if (req.files[`section6[cards][${index}][image]`]) {
          const singleImageFile = req.files[`section6[cards][${index}][image]`][0];
          try {
            if (singleImageFile) {
              imageUploadPromise.push(
                uploadToS3(singleImageFile, "home/section6").then((imageUrl) => {
                  req.body.section6.cards[index].image = imageUrl;
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




    //  //section-7:image array of 4
    if(req.files){
      const imageUploadPromise = [];
      if (req.body?.section7?.cards?.length) {
        for (const [index] of req.body?.section7?.cards?.entries()) {
          if (req.files[`section7[cards][${index}][image]`]) {
            const singleImageFile = req.files[`section7[cards][${index}][image]`][0];
            try {
              if (singleImageFile) {
                imageUploadPromise.push(
                  uploadToS3(singleImageFile, "home/section7").then((imageUrl) => {
                    req.body.section7.cards[index].image = imageUrl;
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


    //sectioin - 8
    //card 1
    if(req.files){
      const image = req.files?.["section8[card1][first_image]"] ? req.files["section8[card1][first_image]"][0] : null;
      if (image) {
        try {
          req.body.section8.card1.first_image = await uploadToS3(image, "home/section8");
        } catch (error) {
          console.error("Home Image upload failed:", error);
        }
      }
    }


    if(req.files){
      const image = req.files?.["section8[card1][second_image]"] ? req.files["section8[card1][second_image]"][0] : null;
      if (image) {
        try {
          req.body.section8.card1.second_image = await uploadToS3(image, "home/section8");
        } catch (error) {
          console.error("Home Image upload failed:", error);
        }
      }
    }

    if(req.files){
      const image = req.files?.["section8[card2][image]"] ? req.files["section8[card2][image]"][0] : null;
      if (image) {
        try {
          req.body.section8.card2.image = await uploadToS3(image, "home/section8");
        } catch (error) {
          console.error("Home Image upload failed:", error);
        }
      }
    }

  

    if(req.files){
      const image = req.files?.["section8[card3][image]"] ? req.files["section8[card3][image]"][0] : null;
      if (image) {
        try {
          req.body.section8.card3.image = await uploadToS3(image, "home/section8");
        } catch (error) {
          console.error("Home Image upload failed:", error);
        }
      }
    }



    //section 9 : bg-image and left-image
    if(req.files){
      const image = req.files?.["section9[bg_image]"] ? req.files["section9[bg_image]"][0] : null;
      if (image) {
        try {
          req.body.section9.bg_image = await uploadToS3(image, "home/section9");
        } catch (error) {
          console.error("Home Image upload failed:", error);
        }
      }
    }

    if(req.files){
      const image = req.files?.["section9[left_image]"] ? req.files["section9[left_image]"][0] : null;

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

exports.UpdateHomeCtrl = async (req, res) => {
  const {_id} = req.body;
  const isStoryExist = await FindHome(_id);
  console.log(isStoryExist);
  if(!isStoryExist){
    throw {
      code: httpStatusCodes.BAD_REQUEST,
      message: res.__(serverResponseMessage.HOME_NOT_EXIST),
    };
  }
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
      res.__(serverResponseMessage.HOME_UPDATED),
      data
    )
  );
};



exports.GetHomeCtrl = async (req, res) => {
  const {_id} = req.params;
  const data = await FindHome(_id);
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

exports.deleteHomeCtrl = async (req, res) => {
  const {_id} = req.params;
  const data = await DeleteHome(_id);
  
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
      res.__(serverResponseMessage.HOME_DELETED),
      data
    )
  );
};
