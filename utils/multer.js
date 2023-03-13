const multer = require("multer");
const shortId=require('shortid');

exports.storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${shortId.generate()}_${file.originalname}`);
  },
});

exports.fileFilter = (req, file, cb) => {
  if (file.mimetype == "music/mp3") {
    cb(null, true);
  } else {
    cb("تنها پسوند mp3 پشتیبانی میشود", false);
  }
};
