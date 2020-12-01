const enlaceModel = require("../models/enlacesModel");
const shortid = require("shortid");

exports.nuevoEnlace = async (req, res) => {
  try {
    const enlace = new enlaceModel({
      nombre_original: req.body.nombre_original,
      password: req.body.password,
      nombre: shortid.generate(),
      url: shortid.generate(),
    });
    await enlace.save();
    console.log(req.usuario);
    res.json({ message: `${enlace.url}` });
  } catch (err) {
    res.json(err);
  }
};
