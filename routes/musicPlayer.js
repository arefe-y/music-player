const { Router } = require("express");
const playerController=require('../controllers/playerController');


const router = Router();

router.get("/getTracks",playerController.getPlayerPage)





module.exports = router;
