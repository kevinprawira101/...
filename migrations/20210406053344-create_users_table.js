'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("biayas", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      first_name: {
        type: Sequelize.CHAR(50),
        allowNull: false
      },
      last_name: {
        type: Sequelize.CHAR(50),
        allowNull: false
      },
      email: {
        type: Sequelize.CHAR(50),
        allowNull: false
      },
      password: {
        type: Sequelize.CHAR(20),
        allowNull: false
      },
      role_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("biayas");
  }
};
