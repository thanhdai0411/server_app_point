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
        },
        address: {
            type: String,
            require: true,
        },
        phone_number: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        number_point: { type: Number },
        info_bank: { type: String },
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
        deleted: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);
