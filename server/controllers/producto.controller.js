//Aqui se crea el CRUD   => crear, borrar, actualizar y eliminar
//todas las funciones de crear borrar se empiezan aca, luego se complementa con models pero models es mas con informacion del schema
const Producto = require('../models/producto.model')

module.exports.get_all = (req, res) => {
    Producto.find()
        .then(productos => res.json(productos)) // el then me dice que hasta que me encuentre todos los objetos, lo va a meter a la lista productos
        .catch(err => res.json({message: "Hubo un error "+err}));
}

//findOne te sirve para pedir un producto en especifico
module.exports.get_product = (req, res) => {
    Producto.findOne({_id: req.params.id})
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Hubo un error "+err}));
}

module.exports.create_product = (req, res) => {
    Producto.create(req.body)
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Hubo un error "+err}));
}

module.exports.update_product =(req, res) => {
    Producto.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true}) // {new:true} significa que me va a regresar el objeto que yo estoy actualizando
    //runValidator:true nos revisa las validaciones que vamos a tener en el futuro modelo
    //findOneAnd update me dice busca un identificador de la url y actualizalo, entonces el identificador que nosotros estamos tratando de empatar _id es aquie que nosotros estamos recibendo a traves de la url. el segundo parametro es el cuerpo completo req.body, este es todo lo que se modifico en el formulario 
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Hubo un error "+err}));
}

module.exports.delete_product = (req, res) => {
    Producto.deleteOne({_id: req.params.id})
        .then(result => res.json({result}))
        .catch(err => res.json({message: "Hubo un error "+err}));
}