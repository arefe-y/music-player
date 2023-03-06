const player = require("../models/songs");

exports.getPlayerPage = async (req, res) => {
  const data = await player.find({});
  res.json(data);
};
