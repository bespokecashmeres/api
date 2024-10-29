const multer = require('multer');
const path = require('path');

// Set storage engine to memory
const storage = multer.memoryStorage();

// Initialize upload with memory storage
const uploadKeyBase = multer({
  storage: storage,
  limits: { fileSize: 10000000000 }, // limit file size to 10 MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
});

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /mp4|mov|avi|mkv|jpeg|jpg|png||pdf/;
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

module.exports = uploadKeyBase;