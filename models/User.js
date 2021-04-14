const Sequelize = require("sequelize");

module.exports = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    email: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    password: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    }
})
