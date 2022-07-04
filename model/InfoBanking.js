const mongoose = require('mongoose');

const { Schema } = mongoose;

const InfoBankSchema = new Schema(
    {
        name_bank: {
            type: String,
        },
        branch_bank: {
            type: String,
        },
        name_account: {
            type: String,
        },
        account_number: {
            type: String,
        },

        number_cmnd: {
            type: String,
        },
        date_publish_cmnd: {
            type: String,
        },
        cmnd_issued_by: {
            type: String,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

const InfoBank = mongoose.model('InfoBank', InfoBankSchema);

module.exports = InfoBank;
