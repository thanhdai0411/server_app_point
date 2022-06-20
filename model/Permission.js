const mongoose = require('mongoose');

const { Schema } = mongoose;

const permissionSchema = new Schema(
    {
        permission_name: {
            type: String,
            required: true,
        },
        action_code: {
            type: [String],
        },
    },
    { timestamps: true }
);

const Permission = mongoose.model('Permission', permissionSchema);
