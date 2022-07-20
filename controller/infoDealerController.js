const InfoDealer = require('../model/InfoDealer');
const User = require('../model/User');
const emailRegisterDealerServices = require('../services/emailRegisterDealerServices');

const infoDealerController = {
    addInfoRegisterDealer: async (req, res) => {
        const { dealer_email, dealer_phone_number } = req.body;

        const images = req.files;
        let listImage = [];
        images.map((item) => {
            const imgUrl = `${process.env.URL}/api/file/get/${item.filename}`;
            listImage.push(imgUrl);
        });

        try {
            const newDealer = new InfoDealer({
                ...req.body,
                imageAvatar: listImage[1],
                imageBusiness: listImage[2],
                imageCMND: listImage[0],
            });
            await newDealer.save();

            await User.findOneAndUpdate(
                { phone_number: dealer_phone_number },
                { info_dealer: newDealer._id }
            );
            // emailRegisterDealerServices(newDealer);
            return res.json({ success: true, data: newDealer });
        } catch (err) {
            res.json({ success: false, message: err.message });
        }
    },
    updateInfoDealer: async (req, res) => {
        try {
            const images = req.files;
            if (images) {
                let listImage = [];
                let img_avatar;
                let img_cmnd;
                let img_business;

                images.map((item) => {
                    const imgUrl = `${process.env.URL}/api/file/get/${item.filename}`;
                    listImage.push(imgUrl);

                    let img = imgUrl.split('_')[2];
                    if (img == 'cmnd') {
                        img_cmnd = imgUrl;
                    } else if (img == 'business') {
                        img_business = imgUrl;
                    } else img_avatar = imgUrl;
                });

                await InfoDealer.findOneAndUpdate(
                    { _id: req.params.id },
                    {
                        ...req.body,
                        imageAvatar: img_avatar,
                        imageBusiness: img_business,
                        imageCMND: img_cmnd,
                    }
                );
                res.json({ success: true, message: 'update info bank success' });
            } else {
                await InfoDealer.findOneAndUpdate({ _id: req.params.id }, req.body);
                res.json({ success: true, message: 'update info bank success' });
            }
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
};

module.exports = infoDealerController;
