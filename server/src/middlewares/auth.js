const jwt = require("jsonwebtoken");

exports.verificaToken = (req, res, next) => {
  const token = req.get("Authorization");
  if (token) {
    try {
      const userToken = jwt.verify(token, process.env.SECRET);
      req.usuario = userToken;
    } catch (err) {
      res.json({ message: "token no valido", err });
    }
  }
  next();
};
