const mongoose = require('mongoose');

const connectMongGoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connect MongoDB success!');
    } catch (error) {
        console.log(`Connect MongoDB fail :${error}`);
    }
};

module.exports = connectMongGoDB;
