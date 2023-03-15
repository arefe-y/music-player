const appRoot = require("app-root-path");

const songs = require("../models/songs");

exports.getAllSongs = async (req, res) => {
  const data = await songs.find({});
  res.json(data);
};

exports.getIndexPage = (req, res) => {
  res.render("index", {
    pageTitle: "Music Player",
    path: "/",
  });
};

exports.getUploadMusicPage = (req, res) => {
  res.render("uploadMusic", {
    pageTitle: "upload music",
    path: "/upload",
  });
};

exports.uploadSong = async (req, res) => {
  const path = req.files ? req.files.path : {};
  const fileName = `${path.name}`;
  const uploadPath = `${appRoot}/public/uploads/${fileName}`;

  try {
    req.body = { ...req.body, path };

    await songs.songValidation(req.body);

    await path.mv(uploadPath, (err) => {
      if (err) return res.status(500).send(err);
    });

    await songs.create({ ...req.body, path: fileName });
    res.redirect("/")

  } catch (error) {
    console.log(error);
  }
};
