const mongoose = require('mongoose');

const { Schema } = mongoose;

const marketingSchema = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        title: String,
    },
    { timestamps: true }
);

const Marketing = mongoose.model('Marketing', marketingSchema);
