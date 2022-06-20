const mongoose = require('mongoose');

const { Schema } = mongoose;


const orderDetailSchema = new Schema(
    {
        price: {
            type: String,
        },
        number_product: {
            type: Number,
        },
        transaction_id: {
            type: Schema.Types.ObjectId,
            ref: 'Transaction',
        },
        product_id: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
        order_id: {
            type: Schema.Types.ObjectId,
            red: 'Order',
        },
    },
    { timestamps: true }
);

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);
