// Requerimos express y lo ejecutamos.
const express = require("express");
const app = express();

const path = require("path");
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

// Declaramos las constantes para importar los archivos de controllers.
const mainRouter = require("./routes/main.js");
app.use("/", mainRouter);

//Montamos el servidor.
app.listen(3010, () => {
    console.log("Servidor corriendo en el puerto 3010.")
});