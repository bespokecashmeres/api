const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up Multer storage configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const uploadDir = 'public/';
//         if (!fs.existsSync(uploadDir)) {
//             fs.mkdirSync(uploadDir);
//         }
//         cb(null, uploadDir); // Directory to save uploaded files
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//     }
// });
const storage = multer.memoryStorage({
    destination: (req, file, cb) => {
        cb(null, '');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// Create the Multer instance
const upload = multer({ storage: storage });

// Middleware function for handling multiple file uploads
const uploadMultiple = (fieldName, maxFiles) => {
    return upload.array(fieldName, maxFiles);
};

module.exports = uploadMultiple;
