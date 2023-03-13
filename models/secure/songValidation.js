const Yup = require("yup");

exports.schema = Yup.object().shape({
  name: Yup.string()
    .required("song's name is necessary")
    .min(2, "you should write at least 3 carachter")
    .max(50, "you cannot enter more than 50 character"),
  artist: Yup.string()
    .min(2, "you should write at least 3 carachter")
    .max(50, "you cannot enter more than 50 character"),
  path: Yup.object().shape({
    name: Yup.string().required("uploading a song is necessary"),
    size: Yup.number().max(4000000, "the file size is too large"),
    mimetype: Yup.mixed().oneOf(["music/mp3"], "only mp3 file supported"),
  }),
});
