const mongoose = require('mongoose');

const { Schema } = mongoose;

const historyPointSchema = new Schema(
    {
        number_point: {
            type: Number,
            required: true,
        },
        exchange_point: {
            type: Number,
        },
        accumulate_point: {
            type: Number,
        },
        donate_points: {
            type: Number,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

const HistoryPoint = mongoose.model('HistoryPoint', historyPointSchema);
module.exports = HistoryPoint;
