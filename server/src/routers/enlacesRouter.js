const { Router } = require("express");
const { verificaToken } = require("../middlewares/auth");

const router = Router();
const { nuevoEnlace } = require("../controllers/enlacesController");

router.post("/enlaces", verificaToken, nuevoEnlace);

module.exports = router;

