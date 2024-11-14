import './App.css';
import Navbar1 from './componentes/navbar.js';
import Slider from './componentes/slider.js';
import Socios from './componentes/socios.js';
import Cards from './componentes/cards.js';
import Nosotros from './componentes/nosotros.js';
import Productos from './componentes/productos.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Navbar1/>
        <Slider/>
        <Socios/>
        <div className='contenedor-cards'>
          <Cards
          servicio='SERVICIO 1'
          />
          <Cards
          servicio='SERVICIO 2'
          />
          <Cards
          servicio='SERVICIO 3'
          />
          <Cards
          servicio='SERVICIO 4'
          />
          <Cards
          servicio='SERVICIO 5'
          />
          <Cards
          servicio='SERVICIO 6'
          />
        </div>
        <div>
          <Nosotros/>
        </div>
        <div className='contenedor-productos'>
          <Productos
          producto='PRODUCTO 1'
          />
          <Productos
          producto='PRODUCTO 2'
          />
          <Productos
          producto='PRODUCTO 3'
          />
          <Productos
          producto='PRODUCTO 4'
          />
          <Productos
          producto='PRODUCTO 5'
          />
          <Productos
          producto='PRODUCTO 6'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
