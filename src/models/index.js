const sequelize = require("../config/db");
const User = require("./userModels");

const db = {};

db.sequelize = sequelize;
db.User = User(sequelize);

module.exports = db;