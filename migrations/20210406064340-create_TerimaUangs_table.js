'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("TerimaUangs", {
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
    
    Pengirim: {
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
    TerimaDari: {
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
    }
})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("TerimaUangs");

  }
};
