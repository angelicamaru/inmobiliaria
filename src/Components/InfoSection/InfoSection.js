import React from "react";
import classes from "./InfoSection.module.css";
import escaleras from '../Images/Escaleras.jpeg'
import senior from '../Images/Senior.jpeg'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        <Container>
          <Row>
            <Col>
              <Image src={senior} rounded />
            </Col>
            <Col>
              <div className={classes.texto3}>
                <p>N. Barbosa</p>
              </div>
              <div className={classes.texto2}>
                <p>Esta es tu descripción del Miembro del equipo. 
                  Utiliza este espacio para describir brevemente el puesto y las responsabilidades 
                  de esta persona, o incluye una breve biografía suya. Es una gran oportunidad para 
                  resaltar la importancia de esta persona en el equipo.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default InfoSection;