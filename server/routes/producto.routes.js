//Importo mi controlador
const ProductoController = require("../controllers/producto.controller");

module.exports = (app) => {
    app.get("/api/productos", ProductoController.get_all);
    app.get("/api/productos/:id", ProductoController.get_product);
    app.post("/api/productos", ProductoController.create_product); //Puedes repetir el nombre de la ruta PERO no se puede repetir la misma peticion
    app.put("/api/productos/:id", ProductoController.update_product);
    app.delete("/api/productos/:id", ProductoController.delete_product);
}
