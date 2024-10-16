const AWS = require("aws-sdk");
const { config } = require("../config/config");
const { addTimestampAndRemoveSpaces } = require("./common");

//aws connection
AWS.config.update({
  accessKeyId: config.AWS_ACCESS_KEY, // replace with your own
  secretAccessKey: config.AWS_SECRET_KEY, // replace with your own
  region: config.AWS_REGION, // replace with your bucket's region
});

const uploadToS3 = (file, type = "upload-image") => {
  return new Promise((resolve, reject) => {
    const s3bucket = new AWS.S3();
    const params = {
      Bucket: config.AWS_BUCKET_NAME,
      Key: `${type}/${addTimestampAndRemoveSpaces(file.originalname)}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };
    s3bucket.upload(params, function (err, data) {
      if (err) {
        reject(err);
      }
      if (data) {
        resolve(`${data.Key}`);
      }
    })
  });
};

module.exports.uploadManyToS3 = async (files, folderName = "many-upload-image") => {
  if (files?.length) {
      try {
          const uploadPromises = files.map(async (file) => {
              try {
                  const path = await uploadToS3(file, folderName);
                  return path;
              } catch (err) {
                  console.error('Error uploading file:', err);
                  // Handle upload error (e.g., return error response)
                  return null;  // Or return a placeholder value
              }
          });

          // Wait for all uploads to complete
          const uploadedPaths = await Promise.all(uploadPromises)
          return uploadedPaths.filter(path => path !== null);
      } catch (error) {
          return [];
      }
  }
}

module.exports.uploadToS3 = uploadToS3;

module.exports.uploadPDFToS3 = ({ fileContent, name, type = "upload-pdf", contentType = "application/pdf" }) => {
  return new Promise((resolve, reject) => {
    const s3bucket = new AWS.S3();
    const params = {
      Bucket: config.AWS_BUCKET_NAME,
      Key: `${type}/${addTimestampAndRemoveSpaces(name)}`,
      Body: fileContent,
      ContentType: contentType,
    };
    s3bucket.upload(params, function (err, data) {
      if (err) {
        reject(err);
      }
      if (data) {
        resolve(`${data.Key}`);
      }
    })
  });
};

module.exports.deleteManyFromS3 = (fileKeys = []) => {
  return new Promise((resolve, reject) => {
    const s3bucket = new AWS.S3();
    const CHUNK_SIZE = 1000; // Maximum objects per request

    const deleteChunks = [];

    // Split fileKeys into chunks as s3 can process maximum 1000 files
    for (let i = 0; i < fileKeys.length; i += CHUNK_SIZE) {
      const chunk = fileKeys.slice(i, i + CHUNK_SIZE);

      deleteChunks.push(new Promise((resolveChunk, rejectChunk) => {
        const params = {
          Bucket: config.AWS_BUCKET_NAME,
          Delete: {
            Objects: chunk.map(fileKey => ({ Key: fileKey }))
          }
        };

        s3bucket.deleteObjects(params, (err, data) => {
          if (err) {
            rejectChunk(err);
          } else {
            resolveChunk(data);
          }
        });
      }));
    }

    Promise.all(deleteChunks)
      .then((results) => {
        resolve(results);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports.deleteFromS3 = (fileKey) => {
  return new Promise((resolve, reject) => {
    const s3bucket = new AWS.S3();

    const params = {
      Bucket: config.AWS_BUCKET_NAME,
      Key: fileKey,
    };

    s3bucket.deleteObject(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(`${config.DELETE_FROM_S3}`);
      }
    });
  });
};


module.exports.uploadVideoToS3 = (file, type = "upload-video") => {
  return new Promise((resolve, reject) => {
    const s3bucket = new AWS.S3();
    const params = {
      Bucket: config.AWS_BUCKET_NAME,
      Key: `${type}/${addTimestampAndRemoveSpaces(file.originalname)}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };
    s3bucket.upload(params, function (err, data) {
      if (err) {
        reject(err);
      }
      if (data) {
        resolve(`${data.Key}`);
      }
    });
  });
};
