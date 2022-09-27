const router = require("express").Router();
const loginController = require("../controller/login.controller");

router.post("/add", loginController.addUser);
router.post("/", loginController.login);

module.exports = router;
