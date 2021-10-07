import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InicioSection from "../InicioSection/Inicio";
import ServiciosSection from "../ServiciosSection/ServiciosSection";
import InfoSection from "../InfoSection/InfoSection";
import ContainerArriendoVenta from "../ArriendoVenta/ContainerArriendoVenta";
import VentaArriedoInmueble from "../Inmuebles/VentaArriedoInmueble";
import classes from "./Menu.module.css";
import DetalleInmueble from "../Inmuebles/DetalleInmueble";
import Footer from "../Footer";

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
          <InfoSection />
        </Route>
        <Route exact path="/contacto">
          <p>Hola3</p>
        </Route>
        <Route exact path="/ventaArriendo">
          <ContainerArriendoVenta />
        </Route>
        <Route exact path="/ventaInmueble">
          <VentaArriedoInmueble operacion="inmueblesVenta" />
        </Route>
        <Route exact path="/arriendoInmueble">
          <VentaArriedoInmueble operacion="inmueblesArriendo" />
        </Route>
        <Route path="/detalleInmueble/:operacion/:id">
          <DetalleInmueble />
        </Route>
        <Route exact path="/administracion">
          <InfoSection />
        </Route>
        <Route exact path="/avaluos">
          <InfoSection />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default MenuMain;
