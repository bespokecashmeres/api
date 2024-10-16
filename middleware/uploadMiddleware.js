// uploadMiddleware.js
const multer = require('multer');
const path = require('path');

// Set storage engine
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/'); // specify the directory to store the uploaded files
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`); // specify the file name
//   }
// });

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, "");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Here, you can define how you want to name your file.
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000000 }, // limit file size to 10 MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('image'); // only one file with the name 'image'

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|webp/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

module.exports = upload;
