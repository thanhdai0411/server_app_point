const mongoose = require('mongoose');

const { Schema } = mongoose;

const pointSchema = new Schema(
    {
        code_scanner: {
            type: String,
            required: true,
        },
        userID: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

const Point = mongoose.model('Point', pointSchema);

module.exports = Point;
