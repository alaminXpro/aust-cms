import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const clubSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }],
  joinRequests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JoinRequest'
  }],
  clubLogo: {
    type: String, 
    required: false 
  },
  clubImages: [{
    type: String, 
    required: false
  }]
}, {
  timestamps: true
});
const Club = mongoose.model('Club', clubSchema);
export default Club;