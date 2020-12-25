const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("./config");
require("dotenv").config();

//SERVER APP
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log("server listen in  port " + port);
});

//SERVER DB
const conectarDB = require("./db");
conectarDB();

//CORS PARA QUE SOLO ENTRE DE ESA URL CONFIG
const opcionesCors = {
  origin: process.env.FRONTEND_URL
}
app.use(cors(opcionesCors));

// MIDDLEWARES DE LIBRERIAS
app.use(morgan("dev"));

// PARA HACER PRUEBAS CON EL POTSMAN
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//ROUTERS
const api = 'api/v1'
app.use(`/${api}`, require('./api/login/loginRouter'))
app.use(`/${api}`, require('./api/usuarios/usuarioRouter'))
app.use(`/${api}`, require('./api/enlaces/enlacesRouter'))
app.use(`/${api}`, require('./api/upload/uploadRouter'))