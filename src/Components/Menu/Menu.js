import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InicioSection from "../InicioSection/Inicio";
import ServiciosSection from "../ServiciosSection/ServiciosSection";
import classes from "./Menu.module.css";

const MenuMain = () => {
  return (
    <Router>
      <div className={classes.menu}>
        <h1>Inmobiliaria</h1>
        <hr />

        <div className={classes.secciones}>
          <Link to="/">Inicio</Link>

          <Link to="/services">Servicios</Link>

          <Link to="/info">Quiénes somos?</Link>

          <Link to="/contacto">Contacto</Link>
        </div>
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
