const { Router } = require("express");
const playerController = require("../controllers/playerController");

const router = Router();

// Get All Songs
router.get("/getTracks", playerController.getAllSongs);

//GET IndexPage
router.get("/",playerController.getIndexPage)

//GET Upload Page
router.get("/upload", playerController.getUploadMusicPage);

//POST Upload song
router.post("/upload", playerController.uploadSong);


module.exports = router;
