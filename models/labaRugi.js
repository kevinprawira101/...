const Sequelize = require("sequelize");

module.exports = sequelize.define("labaRugi", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    debit: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    kredit: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    Tanggal: {
        type: Sequelize.DATE(),
        allowNull: false,
    },
})
