const express = require("express");
const { addUser } = require("../controller/user.controller");
const router = express.Router();

router.post("/add", addUser);

module.exports = router;
