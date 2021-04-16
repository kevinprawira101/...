'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("labaRugis", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      debit: {
        type: Sequelize.CHAR(255),
        allowNull: false,
      },
      kredit: {
        type: Sequelize.CHAR(255),
        allowNull: false,
      },
      Tanggal: {
        type: Sequelize.DATE(),
        allowNull: false,
      },
      })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("labaRugis");
  }
};



