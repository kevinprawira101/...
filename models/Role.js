const Sequelize = require("sequelize");

module.exports = sequelize.define("Role", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    role_name: {
        type: Sequelize.CHAR(20),
        allowNull: false
    },
    role_desc: {
        type: Sequelize.CHAR(255),
        allowNull: false
    }
})
