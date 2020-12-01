const { Router } = require("express");
const { verificaToken } = require("../middlewares/auth");

const router = Router();
const { nuevoEnlace, obtenerEnlace } = require("../controllers/enlacesController");
const { eliminarArchivo } = require("../controllers/uploadController");

router.post("/enlaces", verificaToken, nuevoEnlace);
router.get("/enlaces/:url", obtenerEnlace, eliminarArchivo );

module.exports = router;

