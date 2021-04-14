const Sequelize = require("sequelize");

module.exports = sequelize.define("ProdukJasa", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    gambar: {
        type: Sequelize.CHAR(255),
        allowNull: false
    },
    nama: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    kategori: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    unit: {
        type: Sequelize.CHAR(20),
        allowNull: false
    },
    deskripsi: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    beli: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    akun_beli: {
        type: Sequelize.CHAR(50),
        allowNull: false,
    },
    akun_jual: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    jual: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    akun_jual: {
        type: Sequelize.CHAR(50),
        allowNull: false,
    },
    pajak_jual: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    }
})
