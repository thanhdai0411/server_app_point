const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
        },
        phone_number: {
            type: String,
            required: true,
        },
        status: {
            type: String,
        },
        note: {
            type: String,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
