//Si necesitamos que en el formulario las variables se desplieguen y tengan un valor por default, tendremos que utilizar useState
//Tambien necesito que este precargado este formulario, entonces necesito un hook que me precargue informacion cuando se este desplegando el componente useEffect
import React, { useState, useEffect } from "react";
import axios from "axios"; // vamos a estar utilizando una api para constultar, actualzar y guardar la informacion de mi producto
import { useParams, useHistory, Link } from "react-router-dom" //useParams para obtener info de la url y usehistory para redirigir una vez ya hayamos acabado de actualizar. Link se utiliza mas que todo si queremos un boton para regresar o redireccionar

const ActualizarProducto = () => {

    const { id } = useParams(); //para obtener la variable de identificador de la url
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos/" + id)
            .then(res => {
                setNombre(res.data.nombre);
                setPrecio(res.data.precio);
                setDescripcion(res.data.descripcion);
            })
            .catch(err => console.log(err));
    }, [id]);

    //Función de actualización
    const updateProducto = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/productos/"+id, { //peticion a la api pero ya en put que es actualizar
            nombre, // aqui no hay limpiado de valores, necesitamos que queden tal cual lo actualizamos
            precio,
            descripcion
        })
            .then(res => history.push("/")) // se redirige a la pag principal
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Editar Producto</h1>
            <form onSubmit={updateProducto}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio:</label>
                    <input type="number" id="precio" name="precio" className="form-control" value={precio} onChange={e => setPrecio(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <input type="text" id="descripcion" name="descripcion" className="form-control" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                </div>
                <input type="submit" value="Guardar" className="btn btn-success" />
                <Link to="/" className="btn btn-danger">Cancelar</Link>
            </form>
        </div>
    )


}

export default ActualizarProducto;