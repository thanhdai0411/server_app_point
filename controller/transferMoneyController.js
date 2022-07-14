const User = require('../model/User');

const { startSession } = require('mongoose');

const transferMoneyController = {
    addTransfer: async (req, res) => {
        const session = await startSession();
        try {
            const { idUserFrom, number_point, fromUserPhone, message } = req.body;
            session.startTransaction();

            const userTransfer = await User.findOneAndUpdate(
                { _id: idUserFrom },
                {
                    $inc: { number_point: -number_point },
                },
                {
                    session, // xac dinh la dc dat vao lenh Transaction
                    new: true, // neu co du lieu update thi tra lai, khong thi thoi
                }
            );
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

            return res.json({
                success: true,
                message: 'Transaction successful',
                userTransfer,
                userReceiver,
            });
        } catch (err) {
            await session.abortTransaction();
            await session.endSession();
            return res.json({ success: false, message: err.message });
        }
    },
};
module.exports = transferMoneyController;
