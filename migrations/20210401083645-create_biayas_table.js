'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Biayas", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },

      penerima: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      tanggal_transaksi: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cara_pembayaran: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      no_transaksi: {
        type: Sequelize.INTEGER(10),
        allowNull: false
      },
      alamat_penagihan: {
        type: Sequelize.STRING(255),
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Biayas");
  }
};
