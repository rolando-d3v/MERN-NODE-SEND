const { Router } = require("express");
// const { verificaToken } = require("../middlewares/auth");

const router = Router();
const { loginUser } = require("../controllers/loginController");

router.post("/login", loginUser);

module.exports = router;
