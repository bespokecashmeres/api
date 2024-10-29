// config/multer.js
const multer = require('multer');
const path = require('path');

// Set up Multer storage configuration
const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, ''); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Error: File upload only supports the following filetypes - ' + filetypes));
  }
});

// Middleware function for handling multiple file uploads
const uploadMultipleImage = (fields) => {
  return upload.fields(fields);
};

module.exports = uploadMultipleImage;
