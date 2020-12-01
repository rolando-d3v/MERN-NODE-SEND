const { Router } = require("express");
const { verificaToken } = require("../middlewares/auth");

const router = Router();
const { nuevoEnlace, obtenerEnlace } = require("../controllers/enlacesController");

router.post("/enlaces", verificaToken, nuevoEnlace);
router.get("/enlaces/:url", obtenerEnlace);

module.exports = router;

