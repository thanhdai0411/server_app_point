const Point = require('../model/Points');
const User = require('../model/User');
const HistoryPoint = require('../model/HistoryPoint');
const SettingPoint = require('../model/SettingPoint');

const pointController = {
    addPoints: async (req, res) => {
        const { userID, code_scanner, phoneUserIntroduce, prefix_scan } = req.body;
        try {
            const exitsPoint = await Point.findOne({ code_scanner });

            if (exitsPoint) {
                return res.json({
                    success: false,
                    message: 'Mã đã qua sử dụng',
                });
            }

            const prefixQR = await SettingPoint.findOne({ prefix: prefix_scan });

            const { number_point_user, number_point_intro, type } = prefixQR;

            const userScan = await User.findById({ _id: userID });

            if (type === userScan.role) {
                await userScan.updateOne({ $inc: { number_point: number_point_user } });
            } else {
                return res.json({
                    success: false,
                    message: 'Bạn không có quyền quét mã QRcode này',
                });
            }

            if (phoneUserIntroduce) {
                await User.findOneAndUpdate(
                    {
                        phone_number: phoneUserIntroduce,
                    },
                    {
                        $inc: {
                            number_point_introduce: number_point_intro,
                            number_point: number_point_intro,
                        },
                    }
                );
            }

            const newPoint = new Point({ code_scanner });
            await newPoint.save();

            if (phoneUserIntroduce) {
                res.json({
                    success: true,
                    user: 'both',
                    point: {
                        user: number_point_user,
                        introducer: number_point_intro,
                    },
                    message: `Quét mã tích điểm thành công bạn được cộng ${number_point_user}đ. Bạn của bạn được cộng ${number_point_intro}`,
                });
            } else {
                res.json({
                    success: true,
                    user: 'only',
                    point: {
                        user: number_point_user,
                    },
                    message: `Quét mã tích điểm thành công bạn được cộng ${number_point_user}đ`,
                });
            }
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    getPoints: async (req, res) => {
        try {
            // const point
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
    getAllPoint: async (req, res) => {
        try {
            const points = await Point.find();
            res.json({ success: true, data: points });
        } catch {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
    deleteAllPoint: async (req, res) => {
        try {
            await User.updateMany({ _id: req.params.id }, { points: [] });
            await Point.remove();
            res.json({ success: true, message: 'Delete all collection point' });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
};

module.exports = pointController;
