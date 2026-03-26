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

module.exports = {createUser, getUsers}