const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const UPLOAD_PATH = path.join('/uploads/users/avatars');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true
    },
    fees: {
        type: String,
        required: true
    },
    file: {
        type: String
    }
}, {
    timestamps: true
});

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..' , UPLOAD_PATH));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix);
    }
  });

// static methods
studentSchema.statics.uploadedFile = multer({ storage: storage }).single('file');
studentSchema.statics.uploadPath = UPLOAD_PATH;

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;