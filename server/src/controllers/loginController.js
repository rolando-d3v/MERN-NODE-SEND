const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usuarioModel = require("../models/usuarioModel");

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userEmail = await usuarioModel.findOne({ email: email });
    if (!userEmail) {
      res.status(400).json({ message: "email incorrecto" });
      next();
    }

    const userPassword = await bcrypt.compare(password, userEmail.password);
    if (!userPassword) {
      res.status(400).json({ ok: false, message: "password incorrecto" });
      next();
    }

    const token =  jwt.sign(
      {
        id: userEmail._id,
        nombre: userEmail.nombre,
        email: userEmail.email,
        estado: userEmail.estado,
        role: userEmail.role,
      },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 5 }
    );

    res.json({ ok: true, message: "login correcto", token });
  } catch (err) {
    res.send(err);
    next();
  }
};


//ENDPOIN DEVULEVE LOS DATOS DECODIFICADOS DEL TOKEN
exports.usuarioAutenticado = (req, res, next) => {
  res.json({usuario: req.usuario } );
}
