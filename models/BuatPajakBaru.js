const Sequelize = require("sequelize");

module.exports = sequelize.define("BuatPajakBaru", {
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
    PersentaseAktif: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
    },
    AkunPajakPembelian: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    AkunPajakPenjualan: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    }
})
