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

// MIDDLEWARES DE LIBRERIAS
app.use(cors());
app.use(morgan("dev"));

// PARA HACER PRUEBAS CON EL POTSMAN
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//ROUTERS
const api = 'api/v1'
app.use(`/${api}`, require('./routers/usuarioRouter'))
app.use(`/${api}`, require('./routers/loginRouter'))
