'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("bukuBesars", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    namaAkun: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    transaksi: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    nomor: {
        type: Sequelize.INTEGER(30),
        allowNull: false,
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
    total: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    }
})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("bukuBesars");

  }
};
