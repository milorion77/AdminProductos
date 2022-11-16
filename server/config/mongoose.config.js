//Siempre en la carpeta config va en mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/adminproductos", {
    useNewUrlParser: true, // para lo del decrepado
	useUnifiedTopology: true
})
    .then(()=> console.log("Conectado a DB"))
    .catch(err => console.log("Error al conectarse con DB", err))
