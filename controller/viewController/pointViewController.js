const SettingPoint = require('../../model/SettingPoint');

const pointViewController = {
    pointPage: (req, res) => {
        res.render('pages/point/point');
    },

    addSetting: async (req, res) => {
        const { number_point_user, prefix, number_point_intro } = req.body;
        try {
            if (!number_point_user || !prefix || !number_point_intro) {
                return res.render('pages/fail', {
                    message:
                        'Missing number point for user, number point for introducer or/and prefix QRCode',
                });
            }
            const preFix = await SettingPoint.findOne({ prefix });
            if (preFix) {
                return res.render('pages/fail', {
                    message: 'Prefix existing',
                });
            }
            const newSetting = new SettingPoint(req.body);
            await newSetting.save();
            res.redirect('/view/point/get');
        } catch (err) {
            res.render('pages/fail', { message: err.message });
        }
    },

    getSettingPoint: async (req, res) => {
        try {
            const setting = await SettingPoint.find();
            res.render('pages/point/render-point', { setting });
        } catch (err) {
            res.render('pages/fail', { message: err.message });
        }
    },
    deleteSettingPoint: async (req, res) => {
        try {
            await SettingPoint.findByIdAndDelete({ _id: req.params.id });
            res.redirect('/view/point/get');
        } catch (err) {
            res.render('pages/fail', { message: err.message });
        }
    },
    settingPoint: (req, res) => {
        res.render('pages/point/render-point');
    },
};

module.exports = pointViewController;
