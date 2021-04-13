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
      penerima: {
        type: Sequelize.CHAR(50),
        allowNull: false
      },
      tanggal_transaksi: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cara_pembayaran: {
        type: Sequelize.CHAR(50),
        allowNull: false
      },
      no_transaksi: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
      },
      alamat_penagihan: {
        type: Sequelize.CHAR(255),
        allowNull: false
      },
      akun_biaya: {
        type: Sequelize.CHAR(50),
        allowNull: false
      },
      deskripsi: {
        type: Sequelize.CHAR(255),
        allowNull: false
      },
      pajak: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      jumlah: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      memo: {
        type: Sequelize.CHAR(100),
        allowNull: false
      },
      lampiran: {
        type: Sequelize.CHAR(255),
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("biayas");
  }
};
