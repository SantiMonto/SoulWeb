import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Proyectos from "./components/Proyectos";
import Usuarios from "./components/Usuarios";
import Login from "./components/Login";
import editarUsuario from "./components/editarUsuario";
import EditarCurso from "./components/EditarCurso";
import registroUsuario from "./components/registroUsuario";
import './App.css';
import Solicitudes from "./components/solicitudes";
import NuevoProyecto from "./components/NuevoProyecto";

function App() {


  return (
    <div className="App">
      <Router>
        <Switch>

          <div>
            <Dashboard/>
            <Route path="/login" exact component={() => <Login />} />
            <Route exact path="/registro/:nuevousuario" component={registroUsuario} />
            <Route path="/nuevoProyecto" exact component={() => <NuevoProyecto />} />
            <Route exact path="/editar_cursos/:id" component={EditarCurso} />
            <Route path="/home" exact component={() => <Home />} />
            <Route path="/proyectos" exact component={() => <Proyectos />} />
            <Route path="/usuarios" exact component={() => <Usuarios />} />
            <Route path="/Solicitudes" exact component={() => <Solicitudes />} />
            <Route exact path="/usuarios/:id" component={editarUsuario} />
            <Footer />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
