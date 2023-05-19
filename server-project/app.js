const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");
const app = express();
/* Cargar rutas */
const authRoutes = require("./src/routes/auth");

/* Trabajar con la extensión client-rest */
app.use(bodyParser.json());
/* Pruebas de request utilizando postman */
app.use(bodyParser.urlencoded({extended:true}));

/* Evitar bloqueos en el navegador cuando estemos trabajadno con el backend y el front endt a la vez */
app.use(cors());
console.log(`api/${API_VERSION}/`);
app.use(`/api/${API_VERSION}/auth`, authRoutes);

module.exports = app;