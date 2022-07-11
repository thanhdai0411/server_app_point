const mongoose = require('mongoose');

const { Schema } = mongoose;

const settingPointSchema = new Schema(
    {
        prefix: {
            type: String,
            require: true,
        },
        number_point_user: {
            type: String,
            require: true,
        },
        number_point_intro: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

const SettingPoint = mongoose.model('SettingPoint', settingPointSchema);

module.exports = SettingPoint;
