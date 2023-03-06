const express = require("express");
const fs = require("fs");
const path = require("path");
const dotEnv = require("dotenv");
const expressLayout = require("express-ejs-layouts");
const cors = require("cors");

const connectDB = require("./config/db");

//Load Config
dotEnv.config({ path: "./config/config.env" });

connectDB();

const app = express();

//View Engine
// app.use(expressLayout);
app.set("view engine", "ejs");

//Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

//Static Folder
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/", require("./routes/musicPlayer"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
