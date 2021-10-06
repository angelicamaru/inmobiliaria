import React from "react";
import classes from "./InfoSection.module.css";
import escaleras from '../Images/Escaleras.jpeg'
import Image from 'react-bootstrap/Image'

function InfoSection() {
  return (
    <div className={classes.contenido}>
      <div className={classes.inicio}>
        <Image src={escaleras} roundedCircle />
        <div className={classes.titulo}>
          <label>Todo sobre nosotros</label>
        </div>
        <div className={classes.texto}>
          <p>Somos un emprendimiento que cuenta con un gran equipo de trabajo que posee
            una basta experiencia en el campo inmobiliario, además contamos con las mejores
            herramientas para ayudarte en todo lo que necesites.
          </p>
          <p>Si estas buscando una empresa de desarrollo inmobiliario que te ayude a
            convertir tus ideas en una realidad, considera a Inmobiliaria, tenemos los conocimientos,
            las habilidades y el deseo para ayudarte a triunfar.</p>
        </div>
      </div>
      <div className={classes.medio}>
        <div className={classes.fundador}>
          <label>Fundador</label>
        </div>
        
      </div>
    </div>
  );
}

export default InfoSection;