const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        fist_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        email: {
            type: String,
        },
        phone_number: {
            type: String,
        },
        note: {
            type: String,
        },
    },
    { timestamps: true }
);

const Contact = mongoose.model('Contact', contactSchema);
