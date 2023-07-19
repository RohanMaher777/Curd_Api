const multer = require('multer');
const userProfile = {
    Storage:function(){
        var storage = multer.diskStorage({
            destination:function(req, file, cb){
                cb(null, '../db/connection')
            },
            filename: function(req, file, cb){
                cb(null, file.originalname)
            }
        })
        return storage
    }, 
    allowedImage:function(req, file, cb){
        if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)){
            req.fileValidationError = 'Only image file are allowed!';
            return cb(newError('Only image file are allowed!'), false);
        }
        cb(null, true)
    }
}
module.exports = userProfile;