const enlaceModel = require("../models/enlacesModel");
const shortid = require("shortid");
const bcrypt = require("bcrypt");

//NUEVO ENLACE
exports.nuevoEnlace = async (req, res) => {
  const enlace = new enlaceModel();
  enlace.url = shortid.generate();
  enlace.nombre = shortid.generate();
  enlace.nombre_original = req.body.nombre_original;

  if (req.usuario) {
    if (req.body.password) {
      enlace.password = await bcrypt.hash(req.body.password, 10)
    }

    if (req.body.descargas <= 5 && req.usuario.role === 'USER_ROLE'  ) {
      enlace.descargas = req.body.descargas
    }

    if (req.body.descargas <= 10 && req.usuario.role === 'PRE_ROLE'  ) {
      enlace.descargas = req.body.descargas
    }

    enlace.autor = req.usuario.id;
  }

  try {
    await enlace.save();
    console.log(req.usuario);
    res.json({ message: `${enlace.url}` });
  } catch (err) {
    res.json(err);
  }
};
