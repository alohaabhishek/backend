const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/userController");

router.post("/users", createUser);
router.get("/users", getUsers);

module.exports = router;