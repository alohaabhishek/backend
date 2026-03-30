const db = require("../config/db");
const { getUsers: getUserService, createUser: createUserService, updateUser: updateUserService, deleteUser: deleteUserService } = require("../services/userServices");

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

const updateUser = async (req, res) => {
  try {
    const result = await updateUserService(req.params.id, req.body);
    res.send(result);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  try {
    const result = await deleteUserService(req.params.id);
    res.send(result);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};


module.exports = {createUser, getUsers, updateUser, deleteUser};