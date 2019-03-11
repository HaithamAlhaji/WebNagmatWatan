//
const constants = require("./config/constants");
const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const admin = require("./routers/home/index");
const home = require("./routers/admin/index");
//const il8n = require("il8n-express");
const session = require("express-session");
const flash = require("connect-flash");
const mysql = require("mysql");
const bodyParser = require("body-parser");

// set defaults values from constants.js file
var Defaults = {
  style: constants.Defaults.style,
  language: constants.Defaults.language
};

//
const app = express();

// initilize database connection with check that initilization
const mysqlConnection = mysql.createConnection({
  host: constants.mysql.host,
  user: constants.mysql.user,
  password: constants.mysql.password,
  database: constants.mysql.database
});
mysqlConnection.connect();
mysqlConnection.query("select 1", (errors, results, fields) => {
  if (errors) {
    throw errors;
  } else {
  }
});

//initilize global variables
app.set("defaultStyle", Defaults.style);
app.set("view engine", "handlebars");
app.set("mysqlConnection", mysqlConnection);

//initilize handlebars with express and default layout
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "home/index",
    helpers: { defaultStyle: Defaults.style }
  })
);

// Initilize Session
app.use(
  session({
    secret: "haitham",
    resave: true,
    saveUninitialized: true
  })
);

// Flash
app.use(flash());

// i18n languages

// uses
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("bodyParser", bodyParser);
app.use("/", home);
app.use("/admin", admin);
app.use(express.static(path.join(__dirname, "public")));

//
app.get("/", (req, res, next) => {
  res.send("Hi");
  next();
});

//
app.listen(constants.ExpressServer.Port);
