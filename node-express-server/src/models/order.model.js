const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    tranId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: 'BDT' },
    paymentStatus: { type: String, default: 'UNPAID' },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhone: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    clubId: { type: mongoose.Schema.Types.ObjectId, ref: 'Club' },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
