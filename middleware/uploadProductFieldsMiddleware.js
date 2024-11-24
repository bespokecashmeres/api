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

module.exports = uploadProductFields;
