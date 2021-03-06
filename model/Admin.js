const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: String,
        // role: {
        //     type: String,
        //     enum: ['reader', 'creator', 'editor'],
        //     default: 'reader',
        // },
    },
    { timestamps: true }
);

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
