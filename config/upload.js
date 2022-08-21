const { request } = require('express');
const multer = require('multer');
const {v4} = require('uuid');
const uploadPath = 'public/images/produtos';


module.exports = {
    uploadPath,

    storage: multer.diskStorage({ 
        destination: (request, file, callback) =>{
        callback(null, uploadPath);
    },
    
    filename: (request, file, callback) =>{
        const fileName = `${v4()}-${file.originalname}`;
        callback(null, fileName);
    }
})
}