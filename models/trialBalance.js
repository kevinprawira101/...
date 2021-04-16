const Sequelize = require("sequelize");

module.exports = sequelize.define("trialBalance", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    namaAkun: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    debit: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    kredit: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    tanggal: {
        type: Sequelize.DATE(),
        allowNull: false,
    },
    total: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    }
})