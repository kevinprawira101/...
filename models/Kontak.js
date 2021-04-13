const Sequelize = require("sequelize");

module.exports = sequelize.define("Kontak", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    tipe_kontak: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    nama_awal: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    nama_tengah: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    nama_akhir: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    handphone: {
        type: Sequelize.CHAR(20),
        allowNull: false
    },
    tipe_identitas: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    nomor_identitas: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    email: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    info_lain: {
        type: Sequelize.CHAR(255),
        allowNull: false
    },
    nama_perushaan: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    telepon: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    fax: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    npwp: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    alamat_pembayaran: {
        type: Sequelize.CHAR(255),
        allowNull: false
    },
    alamat_pengirim: {
        type: Sequelize.CHAR(255),
        allowNull: false
    },
    nama_bank: {
        type: Sequelize.CHAR(100),
        allowNull: false
    },
    cabang_bank: {
        type: Sequelize.CHAR(100),
        allowNull: false
    },
    pemegang_akun: {
        type: Sequelize.CHAR(100),
        allowNull: false
    },
    nomor_rekening: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    akun_piutang: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    akun_hutang: {
        type: Sequelize.CHAR(50),
        allowNull: false
    },
    syarat_pembayaran: {
        type: Sequelize.CHAR(50),
        allowNull: false
    }
})
