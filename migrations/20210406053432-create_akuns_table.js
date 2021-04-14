'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("akuns", {
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
      nomor: {
        type: Sequelize.CHAR(50),
        allowNull: false
      },
      kategori: {
        type: Sequelize.CHAR(50),
        allowNull: false
      },
      detail: {
        type: Sequelize.CHAR(50),
        allowNull: false
      },
      deskripsi: {
        type: Sequelize.CHAR(255),
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("akuns");
  }
};
