const mongoose = require('mongoose');

const { Schema } = mongoose;

const giftSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        deadline: String,
        description: String,
        number_point_buy: {
            type: String,
            required: true,
        },
        type_gift: String,
        image: {
            type: String,
            required: true,
        },
        number_count: String,
        manufactory: String,
        info_manufactory: String,
    },
    { timestamps: true }
);

const Gift = mongoose.model('Gift', giftSchema);

module.exports = Gift;
