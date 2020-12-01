const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usuarioModel = require("../models/usuarioModel");

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userEmail = await usuarioModel.findOne({ email: email });
    if (!userEmail) {
      res.json({ message: "email no valido" });
      next();
    }

    const userPassword = await bcrypt.compare(password, userEmail.password);
    if (!userPassword) {
      res.json({ ok: false, message: "password incorrecto" });
      next();
    }

    const token = await jwt.sign(
      {
        id: userEmail._id,
        nombre: userEmail.nombre,
        email: userEmail.email,
        estado: userEmail.estado,
      },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 1 }
    );

    res.json({ ok: true, message: "login correcto", token });
  } catch (err) {
    res.send(err);
    next();
  }
};
