const db = require("../config/db");
const { getUsers: getUserService, createUser: createUserService } = require("../services/userServices");

const createUser = async(req, res) => {
  const { name, email } = req.body;

  try {
    const result = await createUserService(name, email);
    res.status(201).send(result);
  } catch (err) {
    const error = {message: JSON.stringify(err)};
    res.status(400).send(error)
  }
  
};

const getUsers = async(req, res) => {
  try {
    const result = await getUserService();
    res.send(result);
  } catch (err) {
    const error = {message: JSON.stringify(err)};
    res.status(400).send(error)
  }
};

module.exports = {createUser, getUsers};