const Sequelize = require("sequelize");

module.exports = sequelize.define("Beli", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nama_supplier: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
    },
    
    alamat_supplier: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },

    tgl_transaksi:{
        type: Sequelize.DATE,
        allowNull: false,
    },

    tgl_jatuh_tempo:{
        type: Sequelize.DATE,
        allowNull: false,
    },

    syarat_pembayaran: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    no_transaksi: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },

    no_ref_supplier: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },
    nama_produk: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    deskripsi_produk: {
        type: Sequelize.STRING(255),
        allowNull: true
    },

    kuantitas: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },
    satuan: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    harga_satuan: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },
    diskon: {
        type: Sequelize.INTEGER(10),
        allowNull: true
    },
    pajak: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },
    jumlah: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },
    pesan: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
})
