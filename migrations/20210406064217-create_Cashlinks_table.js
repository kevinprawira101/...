'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Cashlinks", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    NamaBank: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    ID_perusahaan: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
  
    Hubung_akun: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },  
    NamaPemilikRekening: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    ID_korporat: {
        type: Sequelize.INTEGER(30),
        allowNull: false,
    },
    NomorRekening: {
            type: Sequelize.CHAR(255),
            allowNull: false,
    },
    Nama_KTP: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    NIK: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    Memo: {
        type: Sequelize.CHAR(255),
        allowNull: false,
}
})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Cashlinks");

  }
};