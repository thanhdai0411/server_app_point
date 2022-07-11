const SettingPoint = require('../model/SettingPoint');

const settingPointController = {
    getAllSetting: async (req, res) => {
        try {
            const settings = await SettingPoint.find();
            res.json({ success: true, data: settings });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getAnSetting: async (req, res) => {
        try {
            const setting = await SettingPoint.findById({ _id: req.params.id });
            res.json({ success: true, data: setting });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
};

module.exports = settingPointController;
