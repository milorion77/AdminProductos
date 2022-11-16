//creo otro componente para utilizar nuevamnete un useState y un useEfect para cuando nosotros despleguemos el componente la primera vez, se despliegue la informacion correspondiente de mi producto. Y con useState podramos crear un producto-objeto vacio que lo podamos llenar cuando usemos el useEffect
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // link para hacer un enlace boton y useParams para obtener la url los diferentes datos que utilizaremos
import axios from "axios"; // para hacer la peticion y concectarme a la api

//creamos nuestro componente de funcion
const Producto = () => {
    const { id } = useParams(); //identificador de la url que es id (este parametro debe de ser igual al de l URL)
    const [producto, setProducto] = useState({});//producto como objeto vacio

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos/" + id)
            .then(res => {
                setProducto(res.data);
            })
            .catch(err => console.log(err));
    }, [id]); // => esto me indica que solo quiero que se me active el useEffect cuando el indentificador cambie

    //ya sigue el return
    return (
        <div className="card">
            <div className="card-header"><h1>{producto.nombre}</h1></div>
            <div className="card-body">
                <h2>${producto.precio}</h2>
                <p>
                    {producto.descripcion}
                </p>
                <Link to="/" className="btn btn-primary">Regresar</Link>
            </div>
        </div>
    )
}

export default Producto;