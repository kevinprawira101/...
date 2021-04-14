const Sequelize = require("sequelize");

module.exports = sequelize.define("perubahanModal", {
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
    tanggal: {
        type: Sequelize.DATE(),
        allowNull: false,
    },
    modalAwal: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    setoranModal: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    labaBersih: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    prive: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    modalAkhir: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    pemegangSaham: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    }
})