const mongoose = require('mongoose');

const { Schema } = mongoose;

const pointSchema = new Schema(
    {
        code_scanner: {
            type: String,
            required: true,
            unique: true,
        },
        number_point: { type: String },
        userID: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

const Point = mongoose.model('Point', pointSchema);

module.exports = Point;
