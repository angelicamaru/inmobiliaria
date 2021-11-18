import classes from "./Quienes.module.css";

const QuieneSomos = () => {
  return (
    <div className={classes.contenedor}>
      <div className={classes.titulo}>
        <label>¿Quiénes somos?</label>
      </div>
      <div className={classes.texto1}>
        <label>Imagina las posibilidades</label>
      </div>
      <div className={classes.texto2}>
        <label>
          Somos un emprendimiento que cuenta con un gran equipo de trabajo que
          posee una basta experiencia en el campo inmobiliario, además contamos
          con las mejores herramientas para ayudarte en todo lo que necesites.
        </label>
        <br></br>
        <label>
          Si estas buscando una empresa de desarrollo inmobiliario que te ayude
          a convertir tus ideas en una realidad, considera a Inmobiliaria,
          tenemos los conocimientos, las habilidades y el deseo para ayudarte a
          triunfar.
        </label>
      </div>
    </div>
  );
};

export default QuieneSomos;
