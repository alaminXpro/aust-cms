const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const logger = require('../config/logger');
const config = require('../config/config');

cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
});

if (config.env !== 'test') {
  cloudinary.api.ping((error, result) => {
    error
      ? logger.warn('Unable to connect to Cloudinary')
      : logger.info('Connected to Cloudinary');
  });
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

const uploadToCloudinary = async (file, options = {}) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: options.folder || 'uploads',
        public_id: options.filename ? `${options.filename}_${Date.now()}` : undefined,
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    uploadStream.end(file.buffer);
  });
};

module.exports = {
  upload,
  uploadToCloudinary,
};
