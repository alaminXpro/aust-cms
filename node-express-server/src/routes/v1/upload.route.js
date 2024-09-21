const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const uploadController = require('../../controllers/upload.controller');
const { upload } = require('../../services/cloudinary.service');
const uploadValidation = require('../../validations/upload.validation');

router
  .route('/upload-single')
  .post(
    auth(),
    upload.single('file'),
    validate(uploadValidation.singleUploadSchema),
    uploadController.uploadSingle
  );

router
  .route('/upload-multiple')
  .post(
    auth(),
    upload.array('files', 5),
    validate(uploadValidation.multipleUploadSchema),
    uploadController.uploadMultiple
  );

module.exports = router;
