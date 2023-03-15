const Yup = require("yup");

exports.schema = Yup.object().shape({
  name: Yup.string()
    .required("song's name is necessary")
    .min(2, "you should write at least 2 carachter")
    .max(50, "you cannot enter more than 50 character"),
  artist: Yup.string().max(50, "you cannot enter more than 50 character"),
  path: Yup.object().shape({
    name: Yup.string().required("song is necessary"),
    size: Yup.number().max(40000000, "the file size is too large"),
    mimetype: Yup.mixed().oneOf(
      ["audio/mp3", "audio/mpeg"],
      "only mp3 file supported"
    ),
  }),
});
