import React from "react";
import classes from "./InfoSection.module.css";
import escaleras from '../Images/Escaleras.jpeg'
import Image from 'react-bootstrap/Image'

function InfoSection() {
  return (
    <div className={classes.contenido}>
      <div className={classes.centrar}>

        <Image src={escaleras} roundedCircle />

        <div className={classes.titulo}>

          <h2>Todo sobre nosotros</h2>

        </div>
      </div>
    </div>
  );
}

export default InfoSection;