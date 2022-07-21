const mongoose = require('mongoose');

const { Schema } = mongoose;

const settingPointSchema = new Schema(
    {
        prefix: {
            type: String,
            require: true,
        },
        number_point_user: {
            type: Number,
            require: true,
        },
        number_point_intro: {
            type: Number,
            require: true,
        },
        type: {
            type: String,
            enum: ['User', 'Dealer'],
            default: 'User',
        },
    },
    { timestamps: true }
);

const SettingPoint = mongoose.model('SettingPoint', settingPointSchema);

module.exports = SettingPoint;
