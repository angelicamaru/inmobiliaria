import React from "react";
import classes from "./InfoSection.module.css";
import {roundedCircle} from 'react-bootstrap'
import escaleras from '../Images/Escaleras.jpeg'
import Image from 'react-bootstrap/Image'

function InfoSection() {
  return (
    <div className={classes.contenido}>
      <Image src={escaleras} roundedCircle />
    </div>
  );
}

export default InfoSection;