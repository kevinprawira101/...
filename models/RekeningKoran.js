const Sequelize = require("sequelize");

module.exports = sequelize.define("RekeningKoran", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ImportFile: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
    NamaAkun: {
        type: Sequelize.CHAR(255),
        allowNull: false,
    },
  
    PilihNamaBank: {
        type: Sequelize.INTEGER(30),
        allowNull: false,
    },  
})
