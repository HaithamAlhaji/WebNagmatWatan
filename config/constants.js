const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  ExpressServer: {
    Port: process.env.PORT || process.env.express_port
  },
  Defaults: {
    style: "default",
    language: "ar"
  },
  mysql: {
    host: process.env.mysql_host,
    user: process.env.mysql_username,
    password: process.env.mysql_password,
    database: process.env.mysql_database
  }
};
