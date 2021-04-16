'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("neracas", {
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
    total: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    }
})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("neracas");
  }
};
