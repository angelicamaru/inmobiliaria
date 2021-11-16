import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Inmueble.module.css";
import Map from "../Inmuebles/Map"

function DetalleInmueble() {
  let { operacion } = useParams();
  let { id } = useParams();
  const [data, setData] = useState({ hits: [] });
  useEffect(async () => {
    const result = await axios("http://localhost:3001/" + operacion + "/" + id);

    setData(result.data);
  });

  return (
    <div>
      <div className={classes.contenido}>
        <div className={classes.imageDiv}>
          <img
            className={classes.image}
            src={data.imagen}
            alt="Mi titulo de la imagen"
          ></img>
        </div>
        <div className={classes.texto}>
          <h2 className={classes.nombreService}>{data.name}</h2>
          <p>Área: {data.area}</p>
          <p>{data.descripcion}</p>
        </div>
      </div>
      <div className={classes.mapa}>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYPWtid2EszivVkAX0nugnAeRyElgaPAE"
          containerElement={<div style={{height: '400px'}}/>}
          mapElement={<div style={{height:'100%'}}/>}
          loadingElement={<p>Cargando</p>}
        />
      </div>
    </div>
  );
}
export default DetalleInmueble;
