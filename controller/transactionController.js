const User = require('../model/User');
const Game = require('../model/Game');
const Transfer = require('../model/Transfer');
const HistoryPoint = require('../model/HistoryPoint');

const { startSession } = require('mongoose');

const transactionController = {
    addTransfer: async (req, res) => {
        const session = await startSession();
        try {
            const { toUserPhone, number_point, fromUserPhone, message } = req.body;
            session.startTransaction();

            const userTransfer = await User.findOneAndUpdate(
                { phone_number: toUserPhone },
                {
                    $inc: { number_point: -number_point },
                },
                {
                    session, // xac dinh la dc dat vao lenh Transaction
                    new: true, // neu co du lieu update thi tra lai, khong thi thoi
                }
            );
            if (userTransfer.number_point == 0) {
                throw Error('Vui long nhap so tien lon hon 0');
            }
            if (userTransfer.number_point < 0) {
                throw Error('Khong du tien');
            }

            const userReceiver = await User.findOneAndUpdate(
                { phone_number: fromUserPhone },
                {
                    $inc: { number_point: number_point },
                },
                {
                    session,
                    new: true,
                }
            );

            await session.commitTransaction();
            await session.endSession();
            const transfer = new Transfer(req.body);
            await transfer.save();

            return res.json({
                success: true,
                data: transfer,
            });
        } catch (err) {
            await session.abortTransaction();
            await session.endSession();
            return res.json({ success: false, message: err.message });
        }
    },
    buyAmountSpin: async (req, res) => {
        const session = await startSession();
        try {
            const { buy_amount, phone_number } = req.body;
            if (buy_amount < 0) {
                return res.json({ success: false, message: 'Không được nhập số lần âm' });
            }
            session.startTransaction();

            const user = await User.findOne({ phone_number }).populate('game');

            const { _id, price_amount } = user.game;

            let totalPriceBuy = +price_amount * +buy_amount;

            if (user.number_point < totalPriceBuy) {
                return res.json({
                    success: false,
                    message: 'Bạn không đủ tiền để mua số lần quay',
                });
            }

            const userBuyAmount = await User.findOneAndUpdate(
                { phone_number },
                {
                    $inc: { number_point: -totalPriceBuy },
                },
                {
                    session, // xac dinh la dc dat vao lenh Transaction
                    new: true, // neu co du lieu update thi tra lai, khong thi thoi
                    upsert: true,
                }
            ).populate('game');

            if (userBuyAmount.number_point < 0) {
                throw Error('Khong du tien mua luot quay');
            }

            await Game.findOneAndUpdate({ _id }, { $inc: { amount: buy_amount } });

            await session.commitTransaction();
            await session.endSession();

            return res.json({
                success: true,
                message: 'Mua số lần quay thành công',
            });
        } catch (err) {
            await session.abortTransaction();
            await session.endSession();
            return res.json({ success: false, message: err.message });
        }
    },
};
module.exports = transactionController;
