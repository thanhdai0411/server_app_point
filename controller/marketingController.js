const Marketing = require('../model/Marketing');

const marketingController = {
    addMkt: async (req, res) => {
        try {
            if (req.file === undefined)
                return res.status(401).json({
                    success: false,
                    message: 'missing url image ',
                });

            const imgUrl = await `${process.env.URL}/api/file/get/${req.file.filename}`;

            const newMkt = new Marketing({ ...req.body, image: imgUrl });
            const saveMkt = await newMkt.save();
            res.json({ success: true, data: saveMkt });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getMarketing: async (req, res) => {
        try {
            const mkt = await Marketing.findById({ _id: req.params.id });
            res.json({ success: true, data: mkt });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getAllMarketing: async (req, res) => {
        try {
            const mkts = await Marketing.find();
            res.json({ success: true, data: mkts });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    updateMarketing: async (req, res) => {
        try {
            await Marketing.findByIdAndUpdate({ _id: req.params.id }, req.body);
            res.json({ success: true, message: 'Update gift success' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    deleteMarketing: async (req, res) => {
        try {
            await Marketing.findByIdAndDelete({ _id: req.params.id });
            res.json({ success: true, message: 'Delete gift success' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    deleteAllMarketing: async (req, res) => {
        try {
            await Marketing.remove();
            res.json({ success: true, message: 'Delete all gift success' });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
};

module.exports = marketingController;
