const express = require("express");
const dotenv = require("dotenv");
const app = express();

//Load Env vars
dotenv.config({ path: "./config/config.env" });

module.exports = app;
