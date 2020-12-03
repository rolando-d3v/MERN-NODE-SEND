const jwt = require("jsonwebtoken");

exports.verificaToken = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (authHeader) {

    const token = authHeader.split(' ')[1];

    if(token) {
    
      try {
          const usuario = jwt.verify(token, process.env.SECRET );
          req.usuario = usuario;
      } catch (error) {
          console.log(error);
          console.log('JWT no valido');
      }
  }

    
  }

  return next();
};
