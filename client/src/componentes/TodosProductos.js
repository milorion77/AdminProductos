//TodosProductos.js es el que se encarga de enlistar a traves de una tabla todos los diferentes productos que tenemos en mongodb
import React, { useEffect, useState } from "react"; // useState es el que nos va a ayudar a tener variables que nosotros podremos utilizar dentro de nuestro componente
import axios from "axios";
import { Link } from "react-router-dom"; // se utiliza como enlace que te lleva a una url

const TodosProductos = props => {

    const [productos, setProductos] = useState([]); //Con useState voy a tener una lista de productos que primero va a comenzar siendo vacía

    useEffect(() => { // a traves de useEffect vamos a cargar dentro de la lista de productos en base a la url o en base a la peticion
        axios.get("http://localhost:8000/api/productos") // a traves de axios hacemos la consulta de la api
            .then(res => {
                setProductos(res.data);
            })
            .catch(err => console.log(err));
    }, []); // coloco una lista vacia para que solamente cuando inicialice el componente se me ejecute el useEffect

    const borrarProducto = id => {
        axios.delete("http://localhost:8000/api/productos/"+id)
            .then(res =>{
                //Actualizamos lista a través de filter
                let nuevaLista = productos.filter(producto => producto._id !== id);
                setProductos(nuevaLista);
            })
    }

    //el return va siempre despues del useEffect
    return (
        <div>
            <h1> Todos los Productos</h1>
            <Link to="/nuevo" className="btn btn-success">Nuevo Producto</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto, index) => (
                            <tr key={index}>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.descripcion}</td>
                                <td>
                                    <Link to={`/producto/${producto._id}`} className="btn btn-primary">
                                        Detalle
                                    </Link>
                                    <Link to={`/producto/editar/${producto._id}`} className="btn btn-warning">
                                        Editar
                                    </Link>

                                    <button className="btn btn-danger" onClick={() => borrarProducto(producto._id)}> Eliminar</button> {/*eliminar no puede ser un link porque este mismo redirecciona, lo que buscamos es que lo haga en la misma pag */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default TodosProductos;
