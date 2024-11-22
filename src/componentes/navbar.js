import React, { useState } from 'react';
import '../style-sheets/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbar1() {
    // Estados para controlar la apertura de cada dropdown.
    const [showServicios, setShowServicios] = useState(false);
    const [showProductos, setShowProductos] = useState(false);

    // Funciones para alternar la visibilidad de los dropdowns.
    const handleToggleServicios = (isOpen) => setShowServicios(isOpen);
    const handleToggleProductos = (isOpen) => setShowProductos(isOpen);

    return (
        <header className="header">
            <div className="logo">
                <a href="\">
                    <img src={require('../img/tracking-go-Logo.png')} alt="Logo" />
                </a>
            </div>
            <Navbar expand="lg" className="navbar-nav">
                <Container className='container'>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="componentes\quienes_somos.js">Nosotros</Nav.Link>
                            <NavDropdown
                                title="Servicios"
                                id="basic-nav-dropdown"
                                show={showServicios}
                                onToggle={handleToggleServicios}
                            >
                                <NavDropdown.Item href="#action/3.1">Servicio 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Servicio 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Servicio 3</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Productos"
                                id="basic-nav-dropdown"
                                show={showProductos}
                                onToggle={handleToggleProductos}
                            >
                                <NavDropdown.Item href="#action/3.1">Producto 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Producto 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Producto 3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                            <Nav.Link href="#login">Ingresar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Navbar1;