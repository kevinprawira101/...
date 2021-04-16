'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Pajaks", {
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
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Pajaks");
  }
};
