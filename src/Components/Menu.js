import { BrowserRouter as Switch, Link } from "react-router-dom";

const MenuMain = () => {
  return (
    <div className="Menú">
      <h1>Inmobiliaria</h1>
      <hr />
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/services">Servicios</Link>
        </li>
        <li>
          <Link to="/info">Quiénes somos?</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMain;
