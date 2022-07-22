const mongoose = require('mongoose');

const connectMongGoDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.0ecuv.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Connect MongoDB success!');
    } catch (error) {
        console.log(`Connect MongoDB fail :${error}`);
    }
};

module.exports = connectMongGoDB;
