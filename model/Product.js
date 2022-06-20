const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: String,
        },
        thumbnail: {
            type: String,
        },
        description: {
            type: String,
        },
        manufacturer: {
            type: String,
        },
        deleted: {
            type: Number,
        },
        discount_id: {
            type: Schema.Types.ObjectId,
            ref: 'Discount',
        },
        category_id: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
