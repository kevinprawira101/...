const Sequelize = require("sequelize");

module.exports = sequelize.define("Jurnal", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    tgl_transaksi:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    no_akun: {
        type: Sequelize.INTEGER(255),
        allowNull: false
    },
    Akun: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    Deskripsi: {
        type: Sequelize.STRING(255),
        allowNull: false,
        
    },
    Debit: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },
    
    Credit: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },
    
})
