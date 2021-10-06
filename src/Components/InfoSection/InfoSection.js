import React from "react";
import classes from "./InfoSection.module.css";
import escaleras from '../Images/Escaleras.jpeg'
import senior from '../Images/Senior.jpeg'
import Image from 'react-bootstrap/Image'
import Footer from "../Footer";
import Contacto from "../Contacto"

function InfoSection() {
  return (
    <div className={classes.contenido}>
      <div className={classes.inicio}>
        <Image src={escaleras} roundedCircle />
        <div className={classes.titulo}>
          <label>Todo sobre nosotros</label>
        </div>
        <div className={classes.texto}>
          <label>Somos un emprendimiento que cuenta con un gran equipo de trabajo que posee
            una basta experiencia en el campo inmobiliario, además contamos con las mejores
            herramientas para ayudarte en todo lo que necesites.
          </label>
          <label>Si estas buscando una empresa de desarrollo inmobiliario que te ayude a
            convertir tus ideas en una realidad, considera a Inmobiliaria, tenemos los conocimientos,
            las habilidades y el deseo para ayudarte a triunfar.</label>
        </div>
      </div>
      <div className={classes.medio}>
        <div className={classes.fundador}>
          <label>Fundador</label>
        </div>
        <div className={classes.contenedor}>
          <div>
            <Image src={senior} rounded />
          </div>
          <div>
            <div className={classes.textotit}>
              <label>N. Barbosa</label>
            </div>
            <div className={classes.textocont}>
              <label>Esta es tu descripción del Miembro del equipo. 
                Utiliza este espacio para describir brevemente el puesto y las responsabilidades 
                de esta persona, o incluye una breve biografía suya. Es una gran oportunidad para 
                resaltar la importancia de esta persona en el equipo.</label>  
            </div>
          </div>
        </div>                 
      </div>
      <div>
        <Contacto />
      </div>
      <Footer />
    </div>
  );
}

export default InfoSection;