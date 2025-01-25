const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, "");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Create the Multer instance
const upload = multer({ storage });

const uploadProductFields = (colorsCount) => {
  const fields = [];
  for (let i = 0; i < colorsCount; i++) {
    fields.push({ name: `colors[${i}][image]`, maxCount: 1 });
    fields.push({ name: `colors[${i}][images]`, maxCount: 10 });
  }
  return upload.fields(fields);
};

const uploadYarnFields = (count) => {
  const fields = [];
  fields.push({ name: "image", maxCount: 1 });
  for (let i = 0; i < count; i++) {
    fields.push({ name: `yarns[${i}][image]`, maxCount: 1 });
  }
  return upload.fields(fields);
};

const uploadStoryFields = (count) => {
  const fields = [];
  fields.push({ name: "bg_image", maxCount: 1 });
  fields.push({ name: "thumb_image", maxCount: 1 });

  for (let i = 0; i < count; i++) {
    fields.push({ name: `my_stories[${i}][image]`, maxCount: 1 });
  }
  return upload.fields(fields);
};

const uploadHomePageFields = () => {
  const fields = [];
  fields.push({ name: "section1[bg_image]", maxCount: 1 });
  fields.push({ name: "section2[bg_image]", maxCount: 1 });
  fields.push({ name: "section2[left_image]", maxCount: 1 });
  

  for (let i = 0; i < 4; i++) {
    fields.push({ name: `section3[${i}][image]`, maxCount: 1 });
  }

  for (let i = 0; i < 5; i++) {
    fields.push({ name: `section4[cards][${i}][bg_image]`, maxCount: 1 });
  }

  for (let i = 0; i < 6; i++) {
    fields.push({ name: `section6[cards][${i}][image]`, maxCount: 1 });
  }

  for (let i = 0; i < 4; i++) {
    fields.push({ name: `section7[cards][${i}][image]`, maxCount: 1 });
  }

  fields.push({ name: "section8[card1][first_image]", maxCount: 1 });
  fields.push({ name: "section8[card1][second_image]", maxCount: 1 });
  fields.push({ name: "section8[card2][image]", maxCount: 1 });
  fields.push({ name: "section8[card3][image]", maxCount: 1 });
  fields.push({ name: "section9[bg_image]", maxCount: 1 });
  fields.push({ name: "section9[left_image]", maxCount: 1 });


  return upload.fields(fields);
};

exports.uploadYarnFields = uploadYarnFields;
exports.uploadProductFields = uploadProductFields;
exports.uploadStoryFields = uploadStoryFields;
exports.uploadHomePageFields = uploadHomePageFields;

