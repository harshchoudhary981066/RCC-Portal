const dbConfig = require("../config/db.config");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  loggig: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

// database models
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// write table name in plural form, db.users defining the table name in plural form
db.users = require("./users.model")(sequelize, DataTypes);
db.events = require("./events.model")(sequelize, DataTypes);
db.mentors = require("./mentors.model")(sequelize, DataTypes);
db.attendance = require("./attendance.model")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then((result) => {
    // console.log(result);
    console.log("Sync complete");
  })
  .catch((err) => console.log(err));

module.exports = db;
