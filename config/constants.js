module.exports = {
  ExpressServer: {
    Port: process.env.PORT || 4500
  },
  Defaults: {
    style: "default",
    language: "ar"
  },
  mysql: {
    // host: 'us-cdbr-iron-east-01.cleardb.net',
    // user: 'be0a3fa637152c',
    // password: 'd8b3aa14',
    // database: 'heroku_914ced0f88734a1'
    host: "127.0.0.1",
    user: "root",
    password: "123123",
    database: "db_library"
  }
};
