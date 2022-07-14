const mongoose = require('mongoose');

const { Schema } = mongoose;

const transferSchema = new Schema(
    {
        idUserFrom: {
            type: String,
            require: true,
        },
        number_point: {
            type: Number,
            require: true,
        },
        fromUserPhone: {
            type: String,
            require: true,
        },
        message: {
            type: String,
        },
    },
    { timestamps: true }
);

const TransFer = mongoose.model('TransFer', transferSchema);

module.exports = TransFer;
