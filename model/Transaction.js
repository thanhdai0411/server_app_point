const mongoose = require('mongoose');

const { Schema } = mongoose;

const transactionSchema = new Schema(
    {
        status: {
            type: String,
        },
        amount: {
            type: String,
        },
        payment: {
            type: String,
        },
        payment_info: {
            type: String,
        },
        message: {
            type: String,
        },
    },
    { timestamps: true }
);

const Transaction = mongoose.model('Transaction', transactionSchema);
