const mongoose = require('mongoose');

const { Schema } = mongoose;

const discountSchema = new Schema(
    {
        rate_discount: {
            type: String,
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        product_id: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    },
    { timestamps: true }
);

const Discount = mongoose.model('Discount', discountSchema);
