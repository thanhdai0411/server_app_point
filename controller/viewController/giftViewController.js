const Gift = require('../../model/Gift');

const giftViewController = {
    addGift: async (req, res) => {
        const { title, number_point_buy } = req.body;
        try {
            if (!title || !number_point_buy || req.file === undefined) {
                return res.render('pages/fail', {
                    message: 'Missing title, number point or/and image',
                });
            }

            const imgUrl = await `${process.env.URL}/api/file/get/${req.file.filename}`;
            const newGift = new Gift({ ...req.body, image: imgUrl });
            await newGift.save();
            res.redirect('/view/gift/get');
        } catch (err) {
            res.render('pages/fail', { message: err.message });
        }
    },
    giftPage: (req, res) => {
        res.render('pages/point/gift');
    },
    getGift: async (req, res) => {
        try {
            const gifts = await Gift.find();
            res.render('pages/point/render-gift', { gifts });
        } catch (err) {
            res.render('pages/fail', { message: err.message });
        }
    },
    getDetailGift: async (req, res) => {
        try {
            const gift = await Gift.findById({ _id: req.params.id });
            res.render('pages/point/gift-detail', { gift });
        } catch (err) {}
    },
    deleteGift: async (req, res) => {
        try {
            await Gift.findByIdAndDelete({ _id: req.params.id });
            res.redirect('/view/gift/get');
        } catch (err) {
            res.render('pages/fail', { message: err.message });
        }
    },

    renderUpdateGift: async (req, res) => {
        try {
            const gift = await Gift.findById({ _id: req.params.id });
            res.render('pages/point/edit-gift', { gift });
        } catch (err) {
            res.render('pages/fail', { message: err.message });
        }
    },
    updateGift: async (req, res) => {
        try {
            await Gift.findByIdAndUpdate({ _id: req.params.id }, req.body);
            res.redirect('/view/gift/get');
        } catch (err) {
            res.render('pages/fail', { message: err.message });
        }
    },
};

module.exports = giftViewController;
