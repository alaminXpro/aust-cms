const { uploadToCloudinary } = require('../services/cloudinary.service');
const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');

const uploadSingle = catchAsync(async (req, res) => {
  if (!req.file) {
    return res.status(httpStatus.BAD_REQUEST).json({ error: 'No file uploaded' });
  }

  const result = await uploadToCloudinary(req.file, {
    folder: req.body.folder,
    filename: req.body.filename,
  });

  res.status(httpStatus.OK).json({
    message: 'File uploaded successfully',
    url: result.secure_url,
    publicId: result.public_id,
  });
});

const uploadMultiple = catchAsync(async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(httpStatus.BAD_REQUEST).json({ error: 'No files uploaded' });
  }

  const uploadPromises = req.files.map(file =>
    uploadToCloudinary(file, {
      folder: req.body.folder,
      filename: req.body.filename,
    })
  );

  const results = await Promise.all(uploadPromises);

  res.status(httpStatus.OK).json({
    message: 'Files uploaded successfully',
    files: results.map(result => ({
      url: result.secure_url,
      publicId: result.public_id,
    })),
  });
});

module.exports = {
  uploadSingle,
  uploadMultiple,
};
