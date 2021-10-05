import ServiciosInicio from "./ServicesInicio";
import QuieneSomos from "./QuienesSomos";
import Contactanos from "../Contactanos";
import Footer from "../Footer";

const InicioSection = () => {
  return (
    <div>
      <div>
        <img></img>
        <h2>Encuentra tu inmueble ideal</h2>
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
