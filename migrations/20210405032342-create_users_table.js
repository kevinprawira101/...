'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
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
    email: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    password: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};
