import '../style-sheets/productos.css'


function Productos(props){
    return (
        <div className='contenedor-producto'>
            
            <div className='contenedor-texto-producto'>
            <img 
                className='imagen-producto'
                src={require(`../img/tracking-go-productos-camara.png`)}
                alt='img-producto'
            />
            <p className='servicio-producto'>
                <strong>{props.producto}</strong>
            </p>
            <p className='texto-producto'>
                "Instalamos camaras en tu vehículo a un excelente precio"
            </p>
            <a href="#producto" className='a'>Ver mas</a>
            </div>
        </div>
    );
}

export default Productos;