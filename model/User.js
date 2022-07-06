const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
        },
        email: {
            type: String,
        },
        address: {
            type: String,
        },
        phone_number: {
            type: String,
            unique: true,
            required: true,
        },

        presenter: {
            type: String,
        },

        number_point: {
            type: Number,
            default: 0,
        },
        number_point_introduce: {
            type: Number,
            default: 0,
        },
        avatar: String,
        image: {
            type: Schema.Types.ObjectId,
            ref: 'Image',
        },
        discount_id: {
            type: Schema.Types.ObjectId,
            ref: 'Discount',
        },
        role_id: {
            type: Schema.Types.ObjectId,
            ref: 'Role',
        },
        rank_id: {
            type: Schema.Types.ObjectId,
            ref: 'Rank',
        },
        info_bank: {
            type: Schema.Types.ObjectId,
            ref: 'InfoBank',
        },
        points: [
            {
                type: String,
                ref: 'Point',
            },
        ],
        history_point: [
            {
                type: Schema.Types.ObjectId,
                ref: 'HistoryPoint',
            },
        ],
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
