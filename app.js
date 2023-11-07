require("dotenv").config();
const path = require("path");
const express = require("express");
require("./database");
const routing = require("./routes");
const app = express();

exports.app = app;

require("./config/session.config");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(routing);

app.listen(3000);
