const mongoose = require('mongoose');

const { Schema } = mongoose;

const rankSchema = new Schema(
    {
        rank_name: {
            type: String,
        },
        number_point_level: {
            type: String,
        },
        medal: {
            type: String,
        },
    },
    { timestamps: true }
);

const Rank = mongoose.model('Rank', rankSchema);
