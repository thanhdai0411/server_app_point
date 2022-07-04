const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const Image = require('../model/Image');

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
                return res
                    .status(401)
                    .json({ success: false, message: 'missing url image' });
            const imgUrl = await `${process.env.URL}/api/file/get/${req.file.filename}`;

            const newImage = new Image({ ...req.body, imageURL: imgUrl });
            const saveImage = await newImage.save();

            res.json({ success: true, data: saveImage });
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
