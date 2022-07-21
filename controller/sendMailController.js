const emailGiftServices = require('../services/emailGiftServices');

const sendMailController = {
    sendExchangeGiftMail: async (req, res) => {
        const { email, phone_number, username, info_bank, info_gift_exchange } = req.body;
        const { name_bank, branch_bank, name_account, account_number } = info_bank;
        const { name: name_gift, point, amount_exchange } = info_gift_exchange;

        try {
            await emailGiftServices({
                email,
                username,
                phone_number,
                name_bank,
                branch_bank,
                name_account,
                account_number,
                name_gift,
                point,
                amount_exchange,
            });
            res.json({ success: true, message: 'Send mail success' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
};

module.exports = sendMailController;
