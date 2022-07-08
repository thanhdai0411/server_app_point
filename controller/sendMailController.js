const emailServices = require('../services/emailSevices');

const sendMailController = {
    sendMail: async (req, res) => {
        console.log(req.body);
        const { email, user_name, name_bank, branch_bank, account_number } = req.body;
        try {
            await emailServices({
                receiverEmail: email,
                user_name,
                name_bank,
                branch_bank,
                account_number,
            });
            res.json({ success: true, message: 'Send mail success' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
};

module.exports = sendMailController;
