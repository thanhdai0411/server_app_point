const Gift = require('../model/Gift');

const giftController = {
    addGift: async (req, res) => {
        const { title, number_point_buy } = req.body;
        try {
            if (!title || !number_point_buy || req.file === undefined) {
                return res.status(400).json({
                    success: false,
                    message: 'Missing title, number_point or/add image',
                });
            }

            const imgUrl = await `${process.env.URL}/api/file/get/${req.file.filename}`;

            const newGift = new Gift({ ...req.body, image: imgUrl });
            const saveGift = await newGift.save();

            res.json({ success: true, data: saveGift });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getGift: async (req, res) => {
        try {
            const gift = await Gift.findById({ _id: req.params.id });
            res.json({ success: true, data: gift });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getGiftByType: async (req, res) => {
        const { type } = req.params;
        let findByType;
        if (type == 'money_gift') findByType = 'tiền';
        else if (type == 'product_gift') findByType = 'quà';
        try {
            const gift = await Gift.find({ type_gift: findByType });
            res.json({ success: true, data: gift });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getAllGift: async (req, res) => {
        try {
            const gifts = await Gift.find();
            res.json({ success: true, data: gifts });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    updateGift: async (req, res) => {
        try {
            await Gift.findByIdAndUpdate({ _id: req.params.id }, req.body);
            res.json({ success: true, message: 'Update gift success' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    deleteGift: async (req, res) => {
        try {
            await Gift.findByIdAndDelete({ _id: req.params.id });
            res.json({ success: true, message: 'Delete gift success' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    deleteAllGift: async (req, res) => {
        try {
            await Gift.remove();
            res.json({ success: true, message: 'Delete all gift success' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
};

module.exports = giftController;
