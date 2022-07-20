const mongoose = require('mongoose');

const { Schema } = mongoose;

const InfoDealerSchema = new Schema(
    {
        dealer_name: {
            type: String,
        },
        shop_name: {
            type: String,
        },
        dealer_email: {
            type: String,
        },
        address: {
            type: String,
        },
        district: {
            type: String,
        },
        province: {
            type: String,
        },
        ward: {
            type: String,
        },

        product_business: {
            type: String,
        },

        imageAvatar: {
            type: String,
        },
        imageBusiness: {
            type: String,
        },
        imageCMND: {
            type: String,
        },
    },
    { timestamps: true }
);

const InfoDealer = mongoose.model('InfoDealer', InfoDealerSchema);

module.exports = InfoDealer;
