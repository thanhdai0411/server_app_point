const mongoose = require('mongoose');
const {
    ModelBuildInstance,
} = require('twilio/lib/rest/autopilot/v1/assistant/modelBuild');

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
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
        discount: {
            type: String,
        },
        category_id: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
