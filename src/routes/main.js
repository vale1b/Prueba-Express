//Requerimos path.
const path = require("path");
const express = require("express");
const mainController = require("../controllers/mainController");

//Creamos la constante router y la ejecutamos.
const router = express.Router();

//Creamos main router y le damos la tarea de enviarnos al home.
router.get("/", mainController.index);

//Exportamos la constante router.
module.exports = router;