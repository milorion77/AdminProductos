const express = require("express"); // es el encargado de crear nuestra aplicacion
const cors = require("cors"); //encargado de mostrar las url en un solo logar
const app = express();

//Para poder usar Json y obtener datos de la url
app.use( express.json(), express.urlencoded({extended: true}) );

//Permite accesar de un origen distinto, debido a que utilizamos 2 terinales diferentes con dos diferentes url
app.use(
    cors({
        origin: "http://localhost:3000"  //Puerto 3000 es de React y el 8000 es de Express
    })
);

//Pendiente: inicializar DB
require("./server/config/mongoose.config") // Aqui estaremos inicializando nuestra base de datos

//Importar las rutas
const misRutas = require("./server/routes/producto.routes");
misRutas(app);


app.listen(8000, () =>console.log("Servidor Listorris!")); // esta es la ejecusion del server