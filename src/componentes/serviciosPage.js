import React from "react";
import "../style-sheets/cards.css";

const ListaServicios = () => {

  return (
    <div className="contenedor-producto">
      <div className="contenedor-texto-producto">
        <img
          className="imagen-producto"
          src={require(`../img/JM-VL03.png`)}
          alt="img-producto"
        />
        <p className="servicio-producto">
          <strong>JM-VL03</strong>
        </p>
        <p className="texto-producto">
          El JM-VL03 es un rastreador GPS 4G LTE fácil de ocultar diseñado principalmente para la gestión de vehículos.
        </p>
        <a href="#producto" className="a">
          Ver mas
        </a>
      </div>
    </div>
  );
};

export default ListaServicios;