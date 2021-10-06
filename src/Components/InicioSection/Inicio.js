import ServiciosInicio from "./ServicesInicio";
import QuieneSomos from "./QuienesSomos";
import Contactanos from "../Contactanos";
import Footer from "../Footer";
import classes from '../InicioSection/Inicio.module.css'
import inmobiliaria from '../Images/Inmobiliaria.png'
import casa from '../Images/Casa.jpeg'
import Image from 'react-bootstrap/Image'

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
      <div className={classes.servicios}>
        <div className={classes.nuestros}>
          <label>Nuestros Servicios</label>
        </div>
        <div className={classes.info}>
          <label>¿Cómo podemos ayudarle?</label>
        </div>
        <ServiciosInicio />
      </div>
      <QuieneSomos />
      <div className={classes.casa}>
        <Image src={casa} fluid />
      </div>
      <Contactanos />
      <Footer />
    </div>
  );
};

export default InicioSection;
