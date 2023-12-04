//Requerimos path
const path = require("path");

//Creamos main controller y le damos la tarea de enviarnos al home.
const mainController = {
    index: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/home.html"));
    }
}

//Exportamos la constante mainController.
module.exports = mainController;