//Aqui siempre va el esquema y todos los diferentes datos  que voy a estar guardando del producto para la coleccion que en este caso estamos creando
const mongoose = require("mongoose")

const EsquemaProducto = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String
}, { timestamps: true, versionKey:false});
// Timestamps crea los campos de createdAt y updatedAt
// VersionKey: false elimina el atributo _v

//Coleccion
const Producto = mongoose.model("productos", EsquemaProducto);  //Lo que esta entre comillas es la coleccion que se crea, y si no esta creada esta misma lo crea

module.exports = Producto;