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
        transfer_points: {
            type: String,
        },
        game_spin: String,
        info_exchange_point: { type: String },
        info_accumulate_point: { type: String },
        info_donate_points: { type: String },
        info_transfer_points: { type: String },
        info_game_spin: { type: String },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

const HistoryPoint = mongoose.model('HistoryPoint', historyPointSchema);
module.exports = HistoryPoint;
