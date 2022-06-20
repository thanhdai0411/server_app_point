const mongoose = require('mongoose');

const { Schema } = mongoose;

const historyPointSchema = new Schema(
    {
        number_points: {
            type: Number,
            required: true,
        },
        exchange_points: {
            type: Number,
        },
        accumulate_points: {
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
