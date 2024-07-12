import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const joinRequestSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  clubId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});
const JoinRequest = mongoose.model('JoinRequest', joinRequestSchema);
export default JoinRequest;
