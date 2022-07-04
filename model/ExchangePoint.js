const mongoose = require('mongoose');

const { Schema } = mongoose;

const exChangePointSchema = new Schema(
    {
        thumbnail: {
            type: String,
            required: true,
        },
        numberPoint: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        exchange_money: {
            type: String,
            required: true,
        },
        exchange_gift: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const exChangePoint = mongoose.model('exChangePoint', exChangePointSchema);
