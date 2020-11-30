const jwt = require("jsonwebtoken");


exports.verificaToken = (req, res, next) => {
  const token = req.get("Authorization");

  if (!token) {
    res.json({ message: "falta token" });
    next();
  }

  try {
    const userToken = jwt.verify(token, process.env.SECRET);
    if (userToken) {
      req.usuario = userToken;
    }
  } catch (err) {
    res.json({ message: "token no valido", err });
  }

  next();
};
