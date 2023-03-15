const mongoose = require("mongoose");

const { schema } = require("./secure/songValidation");

const songsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  artist: {
    type: String,
    default: "Unknown",
    minlength: 2,
    maxlength: 50,
  },
  path: {
    type: String,
    required:true
  },
});

songsSchema.statics.songValidation = function (body) {
  return schema.validate(body, { abortEarly: false });
};

module.exports = mongoose.model("songs", songsSchema);
