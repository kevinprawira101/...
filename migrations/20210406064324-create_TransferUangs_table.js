'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("TransferUangs", {
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
    Setor: {
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
    NomorTransaksi: {
        type: Sequelize.INTEGER(30),
        allowNull: false,
    },

    TanggalTransaksi: {
        type: Sequelize.DATE(),
        allowNull: false,
    },
    Lampiran: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("TransferUangs");

  }
};
