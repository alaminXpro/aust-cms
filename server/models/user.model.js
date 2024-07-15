import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (email) {
          return email.endsWith('@aust.edu');
        },
        message: 'Email must end with @aust.edu',
      },
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'admin'
    },
    clubs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Club'
    }],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
