import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InicioSection from "./Inicio";
import ServiciosSection from "./Servicios/Servicios";

const MenuMain = () => {
  return (
    <Router>
      <div className="Menu">
        <h1>Inmobiliaria</h1>
        <hr />
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/services">Servicios</Link>
          </li>
          <li>
            <Link to="/info">Quiénes somos?</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <InicioSection />
        </Route>
        <Route exact path="/services">
          <ServiciosSection />
        </Route>
        <Route exact path="/info">
          <p>Hola2</p>
        </Route>
        <Route exact path="/contacto">
          <p>Hola3</p>
        </Route>
      </Switch>
    </Router>
  );
};

export default MenuMain;
