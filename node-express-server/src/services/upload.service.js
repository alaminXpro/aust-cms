const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const processUpload = async (file) => {
  if (!file || !file.path) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid file object');
  }
  return {
    url: file.path,
    secure_url: file.path,
    publicId: file.filename,
    folder: file.folder,
    filename: file.filename,
  };
};

const processMultipleUploads = async (files) => {
  if (!Array.isArray(files) || files.length === 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'No files to process');
  }
  return Promise.all(files.map(processUpload));
};

module.exports = {
  processUpload,
  processMultipleUploads,
};
