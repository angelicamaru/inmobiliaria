import ServiciosInicio from "./ServicesInicio";
import QuieneSomos from "./QuienesSomos";
import Contactanos from "../Contactanos";
import Footer from "../Footer";
import classes from '../InicioSection/Inicio.module.css'
import inmobiliaria from '../Images/Inmobiliaria.png'

const InicioSection = () => {
  return (
    <div className={classes.contenido}>
      <div className={classes.contenedor}>
        <div>
          <img src={inmobiliaria}></img>
        </div>
        <div className={classes.textoimg}>
          <div className={classes.texto}>
            <label>Encuentra</label><br></br>
            <label> tu inmueble</label><br></br>
            <label>ideal</label>
          </div>
        </div>
      </div>
      <div>
        <h3>Nuestros Servicios</h3>
        <h4>¿Cómo podemos ayudarle?</h4>
        <ServiciosInicio />
      </div>
      <QuieneSomos />
      <img></img>
      <Contactanos />
      <Footer />
    </div>
  );
};

export default InicioSection;
