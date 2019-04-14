module.exports = {
  ExpressServer: {
    Port: process.env.PORT || process.env.PORT
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
