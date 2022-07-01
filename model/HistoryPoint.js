const mongoose = require('mongoose');

const { Schema } = mongoose;

const historyPointSchema = new Schema(
    {
        exchange_point: {
            type: String,
        },
        accumulate_point: {
            type: String,
        },
        donate_points: {
            type: String,
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
