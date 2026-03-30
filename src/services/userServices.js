const db = require("../models");
const User = db.User;

const createUser = async(name, email) => {
    const data = {name, email}
    const user = await User.create(data);
    return user;
};

const getUsers = async() => {
    const users = await User.findAll();
    return users;
};

const updateUser = async (id, data) => {
  await User.update(data, { where: { id } });
  return { message: "User updated successfully" };
};


const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
  return { message: "User deleted successfully" };
};

module.exports = {createUser, getUsers, updateUser, deleteUser}