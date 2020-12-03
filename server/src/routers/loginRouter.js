const { Router } = require("express");
const { verificaToken } = require("../middlewares/auth");

const router = Router();
const { loginUser, usuarioAutenticado } = require("../controllers/loginController");

router.post("/login", loginUser);
router.get("/login", verificaToken, usuarioAutenticado);

module.exports = router;
