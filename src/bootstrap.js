module.exports = async () => {
    const Role = require("../models/Role");
    const User = require("../models/User");

    User.hasMany(Roles, { as: "Roles", foreignKey: "role_id" });
    Role.belongsTo(User, { as: "User", foreignKey: "role_id" });

    const errHandler = (err) => {
        console.error("Error: ", err);
    }

    const role = await Role.create({ role_name: "Web Developer", role_desc: "A person who does web developing" }).catch(errHandler);;

    const user = await User.create({ first_name: "Roseanne", last_name: "Park", email: "rose@gmail.com", password: "rose1234", role_id: role.role_id }).catch(errHandler);

    const users = await User.findAll({ where: { username: 'Roseanne' }, include: [{ model: Role, as: "Roles" }] }).catch(errHandler);

    console.log("Rose Roles: ", users);
}