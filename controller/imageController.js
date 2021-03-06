const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const Image = require('../model/Image');
const User = require('../model/User');

let gfs, gridfsBucket;

const conn = mongoose.connection;

conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'photos',
    });

    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('photos');
});

const imageController = {
    uploadImage: async (req, res) => {
        try {
            if (req.file === undefined)
                return res.status(401).json({
                    success: false,
                    message: 'missing url image or phone number',
                });
            const imgUrl = await `${process.env.URL}/api/file/get/${req.file.filename}`;

            res.json({ success: true, data: imgUrl });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    getImage: async (req, res) => {
        try {
            const file = await gfs.files.findOne({ filename: req.params.filename });
            if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
                const readStream = gridfsBucket.openDownloadStream(file._id);
                readStream.pipe(res);
            }
        } catch (error) {
            res.send(error.message);
        }
    },
};
module.exports = imageController;
