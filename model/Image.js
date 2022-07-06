const mongoose = require('mongoose');

const { Schema } = mongoose;

const ImageSchema = new Schema(
    {
        imageURL: String,
    },
    { timestamps: true }
);

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
