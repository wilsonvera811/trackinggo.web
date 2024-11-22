import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from "./componentes/navbar.js";
import Slider from "./componentes/slider.js";
import Socios from "./componentes/socios.js";
import Cards from "./componentes/cards.js";
import Nosotros from "./componentes/nosotros.js";
import Productos from "./componentes/productos.js";
import ProductosPage from "./componentes/productosPage.js";
import ServiciosPage from "./componentes/serviciosPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="contenedor-principal">
          <Navbar1 />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <Socios />
                  <div className="contenedor-cards">
                    <Cards servicio="SERVICIO 1" />
                    <Cards servicio="SERVICIO 2" />
                    <Cards servicio="SERVICIO 3" />
                    <Cards servicio="SERVICIO 4" />
                    <Cards servicio="SERVICIO 5" />
                    <Cards servicio="SERVICIO 6" />
                  </div>
                  <div>
                    <Nosotros />
                  </div>
                  <div className="contenedor-productos">
                    <Productos producto="PRODUCTO 1" />
                    <Productos producto="PRODUCTO 2" />
                    <Productos producto="PRODUCTO 3" />
                    <Productos producto="PRODUCTO 4" />
                    <Productos producto="PRODUCTO 5" />
                    <Productos producto="PRODUCTO 6" />
                  </div>
                </>
              }
            />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route
              path="/servicios"
              element={
                <div className="contenedor-cards">
                    <Cards servicio="SERVICIO 1" />
                    <Cards servicio="SERVICIO 2" />
                    <Cards servicio="SERVICIO 3" />
                    <Cards servicio="SERVICIO 4" />
                    <Cards servicio="SERVICIO 5" />
                    <Cards servicio="SERVICIO 6" />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
