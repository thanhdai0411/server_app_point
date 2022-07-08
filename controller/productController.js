const Product = require('../model/Product');
const productController = {
    addProduct: async (req, res) => {
        const { title, price, thumbnail, description, manufacturer, discount } = req.body;
        if (!title || !price || !thumbnail) {
            return res.status(400).json({
                success: false,
                message: 'Missing title or/and price, thumbnail ',
            });
        }
        try {
            const newProduct = new Product(req.body);
            const saveProduct = await newProduct.save();
            res.json({ success: true, data: saveProduct });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal Server Error ',
            });
        }
    },
    getAllProduct: async (req, res) => {
        try {
            const products = await Product.find();
            res.json({ success: true, data: products });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal Server Error ',
            });
        }
    },
    getDetailProduct: async (req, res) => {
        try {
            const productDetail = await Product.findById({ _id: req.params.id });
            res.json({ success: true, data: productDetail });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal Server Error ',
            });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await Product.findByIdAndDelete({ _id: req.params.id });
            res.json({ success: true, message: 'Delete product success' });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal Server Error ',
            });
        }
    },
    updateProduct: async (req, res) => {
        try {
            await Product.findByIdAndUpdate({ _id: req.params.id }, req.body);
            res.json({ success: true, message: 'Update product success' });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    },
};

module.exports = productController;
