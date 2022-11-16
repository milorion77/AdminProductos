//useState para crear una variable por cada uno de los campos que vamos a estar guardando en la base de datos, por lo tanto, a traves de useState vamos a crear un nombre, un precio y una descripcion
//no importo useEffect porque no vamos a cargar ningun valor por default y no vamos directamente a desplegar ningun valor
//importamos axios para conectarnos a nuestra api
//utilizamos useHistory para que nos ayude a redirigir a nuestro usuario de una pantalla a otra sin uso de botones o enlaces
import React, {useState}  from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"; // es el encargado de redirigir sin enlaces

//funcion para hacer registrar un nuevo producto
const NuevoProducto = () => {

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const history = useHistory(); // esta funcion es la que me ejecuta el hook {useHistory}

    //Función que guarda el producto
    const guardarProducto = e => { 
        e.preventDefault(); // esta funcion previene el comportamiento por default del submit del formulario
        axios.post("http://localhost:8000/api/productos", { //realiza la peticion de post con axios
            nombre, // este es el segundo parametro y es el body, lo que estamos ingresando
            precio,
            descripcion
        })
            .then(res => { //cuando tenga la respuesta quiero:
                setNombre(""); //nombre vacio
                setPrecio(""); //precio vacio
                setDescripcion(""); //descripcion vacia
                history.push("/"); // y que me regrese a la pagina principal
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h1>Nuevo Producto</h1>
            <form onSubmit={guardarProducto}> {/* cuando se haga submit se ejecuta la funcion de guardar producto */}
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" className="form-control" value={nombre} onChange={e=>setNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio:</label>
                    <input type="number" id="precio" name="precio" className="form-control" value={precio} onChange={e=>setPrecio(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <input type="text" id="descripcion" name="descripcion" className="form-control" value={descripcion} onChange={e=>setDescripcion(e.target.value)} />
                </div>
                <input type="submit" value="Guardar" className="btn btn-success" />
            </form>
        </div>
    )

}

export default NuevoProducto;