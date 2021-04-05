const { Sequelize } = require("sequelize");
const Sequelize = require("sequelize");

const Sequelize = new Sequelize("hbmSequelize", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
    operatorAliases: false
});

module.exports = sequelize;
global.sequelize = sequelize;
