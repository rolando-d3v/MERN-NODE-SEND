const { Router } = require("express");
const { verificaToken } = require("../../middlewares/auth");

const router = Router();
const { nuevoEnlace, obtenerEnlace } = require("./enlacesController");
const { eliminarArchivo } = require("../upload/uploadController");

router.post("/enlaces", verificaToken, nuevoEnlace);
router.get("/enlaces/:url", obtenerEnlace, eliminarArchivo );

module.exports = router;

