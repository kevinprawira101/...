
    const Sequelize = require("sequelize");

    module.exports = sequelize.define("KirimUang", {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        TransferDari: {
            type: Sequelize.CHAR(255),
            allowNull: false,
        },
        
        Penerima: {
            type: Sequelize.CHAR(255),
            allowNull: false,
        },  
        NomorTransaksi: {
            type: Sequelize.INTEGER(30),
            allowNull: false,
        },
        TanggalTransaksi: {
            type: Sequelize.DATE(),
            allowNull: false,
        },
        PembayaranAkun: {
            type: Sequelize.CHAR(255),
            allowNull: false,
        },
        Deskripsi: {
            type: Sequelize.CHAR(255),
            allowNull: false,
        },
        Pajak: {
            type: Sequelize.CHAR(255),
            allowNull: false,
        },
        Jumlah: {
            type: Sequelize.INTEGER(30),
            allowNull: false,
        },
        Memo: {
            type: Sequelize.CHAR(255),
            allowNull: false,
        },
        Lampiran: {
            type: Sequelize.CHAR(255),
            allowNull: false,
        },
        SubTotal: {
            type: Sequelize.INTEGER(30),
            allowNull: false,
        },
        Total: {
            type: Sequelize.INTEGER(30),
            allowNull: false,
        },

        Pemotongan: {
            type: Sequelize.INTEGER(30),
            allowNull: false,
        },
    })