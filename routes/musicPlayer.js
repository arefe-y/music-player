const { Router } = require("express");
const playerController = require("../controllers/playerController");

const router = Router();

// Get All Songs
router.get("/getTracks", playerController.getAllSongs);

//GET Upload Page
router.get("/upload", playerController.getUploadMusicPage);

//POST Upload song
router.post("/music-upload", playerController.UploadSong,playerController.createInDB);

// router.post("/upload-db", playerController.createInDB);

module.exports = router;
