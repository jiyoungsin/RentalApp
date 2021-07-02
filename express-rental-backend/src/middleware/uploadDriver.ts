import multer from 'multer';

const ourStorage = multer.diskStorage({
    destination: (req, res, cb)=>{
        cb(null, "uploads/");
    },
});

const uploadMiddleware = multer({
    storage: ourStorage
});

export default uploadMiddleware;