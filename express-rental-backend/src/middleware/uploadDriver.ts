import multer from 'multer';
const path = require('path');

const ourStorage = multer.diskStorage({
    destination: (req, res, cb)=>{
        cb(null, path.join(__dirname, '/uploads/'));
    },
});

const uploadMiddleware = multer({
    storage: ourStorage
});

module.exports = uploadMiddleware;