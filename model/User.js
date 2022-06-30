const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        address: {
            type: String,
            unique: true,
            required: true,
        },
        phone_number: {
            type: String,
        },
        password: {
            type: String,
            require: true,
        },

        presenter: {
            type: String,
        },

        info_bank: { type: String },
        number_point: {
            type: Number,
            default: 0,
        },
        number_point_introduce: {
            type: Number,
            default: 0,
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

        points: [
            {
                type: String,
                ref: 'Point',
            },
        ],
        history_point: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Point',
            },
        ],
        deleted: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
