import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const registerLink = (e) => {
        e.preventDefault();
        setAction(' active');  
        setShowForgotPassword(false);
        setEmailSent(false);
    };

    const loginLink = (e) => {
        e.preventDefault();
        setAction('');  
        setShowForgotPassword(false);
        setEmailSent(false);
    };

    const forgotPasswordLink = (e) => {
        e.preventDefault();
        setShowForgotPassword(true);
        setEmailSent(false);
    };

    const handleForgotPasswordSubmit = (e) => {
        e.preventDefault();
        setEmailSent(true); 
    };

   
    function Navbar1() {
        const [showServicios, setShowServicios] = useState(false);
        const [showProductos, setShowProductos] = useState(false);
    
        return (
            <header className="header">
                <div className="logo">
                    <a href="/">
                        <img src={require(`../Assets/tracking-go-Logo.png`)} alt="Logo" />
                    </a>
                </div>
                <Navbar expand="lg" className="navbar-nav">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="componentes/quienes_somos.js">Nosotros</Nav.Link>
    
                                {/* Servicios Dropdown */}
                                <NavDropdown
                                    title="Servicios"
                                    id="servicios-dropdown"
                                    onMouseEnter={() => setShowServicios(true)}
                                    onMouseLeave={() => setShowServicios(false)}
                                    show={showServicios}  // Controlamos la visibilidad con 'show'
                                    className="dropdown-services" // Aseguramos la clase
                                >
                                    <NavDropdown.Item href="#action/3.1">Servicio 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Servicio 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Servicio 3</NavDropdown.Item>
                                </NavDropdown>
    
                                {/* Productos Dropdown */}
                                <NavDropdown
                                    title="Productos"
                                    id="productos-dropdown"
                                    onMouseEnter={() => setShowProductos(true)}
                                    onMouseLeave={() => setShowProductos(false)}
                                    show={showProductos}  // Controlamos la visibilidad con 'show'
                                    className="dropdown-products" // Aseguramos la clase
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

    
    return (
        <>
            <Navbar1 /> {/* Ahora la Navbar está arriba de la sección de Login/Registro */}
            <div className={`wrapper${action}`}>
                {!showForgotPassword ? (
                    <>
                        <div className="form-box Login">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <h1>Ingresar</h1>
                                <div className="input-box">
                                    <input type="text" placeholder="Usuario" required />
                                    <FaUser className="icon" />
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder="Contraseña" required />
                                    <FaLock className="icon" />
                                </div>
                                <div className="remember-forgot">
                                    <label><input type="checkbox" /> Recordar</label>
                                    <a href="#" onClick={forgotPasswordLink}> ¿Olvidaste tu contraseña?</a>
                                </div>
                                <button type="submit">Ingresar</button>
                                <div className="register-link">
                                    <p>¿No tienes una cuenta?
                                        <a href="#" onClick={registerLink}> Registrarse</a>
                                    </p>
                                </div>
                            </form>
                        </div>

                        <div className="form-box register">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <h1>Registrarse</h1>
                                <div className="input-box">
                                    <input type="text" placeholder="Usuario" required />
                                    <FaUser className="icon" />
                                </div>
                                <div className="input-box">
                                    <input type="email" placeholder="Correo electrónico" required />
                                    <FaEnvelope className="icon" />
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder="Contraseña" required />
                                    <FaLock className="icon" />
                                </div>
                                <div className="remember-forgot">
                                    <label><input type="checkbox" /> Aceptar términos y condiciones</label>
                                </div>
                                <button type="submit">Registrarse</button>
                                <div className="register-link">
                                    <p>¿Ya tienes una cuenta?
                                        <a href="#" onClick={loginLink}> Ingresar</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="form-box forgot-password">
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <h1>Recuperar Contraseña</h1>
                            {emailSent ? (
                                <p>Se ha enviado un enlace de recuperación a tu correo electrónico.</p>
                            ) : (
                                <>
                                    <div className="input-box">
                                        <input type="email" placeholder="Correo electrónico" required />
                                        <FaEnvelope className="icon" />
                                    </div>
                                    <p>Ingresa tu correo electrónico para recibir instrucciones de recuperación.</p>
                                    <button type="submit">Enviar</button>
                                </>
                            )}
                            <div className="register-link">
                                <p>
                                    <a href="#" onClick={loginLink}>Volver a Ingresar</a>
                                </p>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default LoginRegister;




