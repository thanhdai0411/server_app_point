const mongoose = require('mongoose');

const { Schema } = mongoose;

const roleSchema = new Schema(
    {
        // role: {
        //     type: String,
        //     enum: ['reader', 'creator', 'editor'],
        //     default: 'reader',
        // },
        role_name: {
            type: String,
            required: true,
        },
        permission_id: {
            type: [Schema.Types.ObjectId],
            ref: 'Permission',
        },
    },
    { timestamps: true }
);

const Role = mongoose.model('Role', roleSchema);
