const mongoose = require('mongoose');

const { Schema } = mongoose;

const gallerySchema = new Schema(
    {
        thumbnail: {
            type: String,
            required: true,
        },
        product_id: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    },
    { timestamps: true }
);

const Gallery = mongoose.model('Gallery', gallerySchema);
