const mongoose = require('mongoose');

const { Schema } = mongoose;

const ImageSchema = new Schema(
    {
        name: String,
        desc: String,
        imageURL: String,
    },
    { timestamps: true }
);

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
