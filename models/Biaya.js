const Sequelize = require("sequelize");

module.exports = sequelize.define("Biaya", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
<<<<<<< HEAD
    username: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
    },
    password: { 
        type: Sequelize.STRING(20),
        allowNull: false,
    },

=======
>>>>>>> 61f5f2fc79ebc8750e28fb9385e98079d9555f5d
    penerima: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    tanggal_transaksi: {
        type: Sequelize.DATE,
        allowNull: false
    },
    cara_pembayaran: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    no_transaksi: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
    },
    alamat_penagihan: {
        type: Sequelize.CHAR(255),
        allowNull: false
    },
    akun_biaya: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    deskripsi: {
        type: Sequelize.CHAR(255),
        allowNull: false
    },
    pajak: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    jumlah: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    memo: {
        type: Sequelize.CHAR(100),
        allowNull: false
    },
    lampiran: {
        type: Sequelize.CHAR(255),
        allowNull: false
    }
})
