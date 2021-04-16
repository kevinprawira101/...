const Sequelize = require("sequelize");

module.exports = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
<<<<<<< HEAD
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
=======
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
    },
>>>>>>> 61f5f2fc79ebc8750e28fb9385e98079d9555f5d
})
