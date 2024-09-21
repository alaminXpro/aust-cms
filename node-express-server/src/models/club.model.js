const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const clubSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
      default: 'https://www.aust.edu',
    },
    moderators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    pendings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  },
);

// add plugin that converts mongoose to json
clubSchema.plugin(toJSON);
clubSchema.plugin(paginate);

/**
 * Check if club name is taken
 * @param {string} name - The club's name
 * @param {ObjectId} [excludeClubId] - The id of the club to be excluded
 * @returns {Promise<boolean>}
 */
clubSchema.statics.isClubExists = async function (name, excludeClubId) {
  const club = await this.findOne({ name, _id: { $ne: excludeClubId } });
  return !!club;
};

/**
 * @typedef Club
 */
const Club = mongoose.model('Club', clubSchema);

module.exports = Club;
