const multer = require("multer");
const path = require("path");
const shortId = require("shortid");

const songs = require("../models/songs");
const { fileFilter, storage } = require("../utils/multer");

exports.getAllSongs = async (req, res) => {
  const data = await songs.find({});
  res.json(data);
};

exports.getUploadMusicPage = (req, res) => {
  res.render("uploadMusic", {
    pageTitle: "upload music",
    path: "/upload",
  });
};


exports.UploadSong = (req, res,next) => {

  const upload = multer({ 
    limits: { fileSize: 5*1024*1024 },
    // dest: "public/uploads/",
    storage: storage,
    // fileFilter
  }).single("music");

  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      if (req.file) {
        const file = req.file;
        const filePath = path.join(
          __dirname,
          "public",
          "uploads",
          `${file.originalname}`
        );
      } else {
        res.send("you should choose a file for upload");
      }
    }
  });
  next()
};

exports.createInDB=async(req,res)=>{
  try {
    console.log(req.body);
    res.redirect("/")
  } catch (err) {
    console.log(err);
  }
}
