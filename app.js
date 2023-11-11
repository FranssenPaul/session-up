require("dotenv").config();
const path = require("path");
const express = require("express");
require("./database");

const app = express();
require("./config/session.config")(app);

const routing = require("./routes");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(routing);

app.listen(3000);
