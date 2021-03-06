const usuarioModel = require("./usuarioModel");
const bcrypt = require("bcrypt");

exports.getUsuarios = async (req, res) => {
  res.json({ message: "user rolando" });
};

//CREA UN USUARIO
exports.createdUsuario = async (req, res) => {
  try {
    const usuario = new usuarioModel({
      nombre: req.body.nombre,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      estado: req.body.estado,
      role: req.body.role,
    });
    console.log(usuario);
    await usuario.save();
    res.json({ message: "user created successfully" });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: "el email ya registrado", err });
    }
    console.log(err);
  }
};
