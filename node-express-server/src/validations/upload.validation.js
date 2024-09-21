const Joi = require('joi');

const singleUploadSchema = Joi.object({
  folder: Joi.string().optional(),
  filename: Joi.string().optional(),
}).unknown(true);

const multipleUploadSchema = Joi.object({
  folder: Joi.string().optional(),
  filename: Joi.string().optional(),
}).unknown(true);

module.exports = {
  singleUploadSchema,
  multipleUploadSchema,
};
