const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema(
    {
        amount: {
            type: Number,
            default: 0,
        },
        price_amount: {
            type: Number,
            default: 1000,
        },
        free_amount: {
            type: Number,
            default: 5,
        },
        buy_amount: {
            type: Number,
        },
        already_spin: {
            type: Number,
            default: 0,
        },

        phone_number: {
            type: String,
            require: true,
            unique: true,
            ref: 'User',
        },
    },
    { timestamps: true }
);

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
