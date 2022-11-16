//recordar que siempre que vayamos a importar rutas esta el BrowserRouter, Router, Switch
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ActualizarProducto from './componentes/ActualizarProducto';
import NuevoProducto from './componentes/NuevoProducto';
import Producto from './componentes/Producto';
import TodosProductos from './componentes/TodosProductos';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> <TodosProductos/>} />
          <Route path="/producto/:id" exact render={() => <Producto/>}/> {/* esa variable :id tiene que coincidir con la que colocamos en componente Producto */}
          <Route path="/nuevo" render={() => <NuevoProducto/>} />
          <Route path="/producto/editar/:id" exact render={() => <ActualizarProducto />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
