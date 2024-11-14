
import '../style-sheets/nosotros.css'


function Nosotros(){
    return(
        <div className='contenedor-nosotros'>
            <div className='contenedor-img-nosotros'>
                <img 
                    className='imagen-nosotros'
                    src={require(`../img/tracking go-Logo-Nosotros.png`)}
                    alt='imagen-nosotros'
                />
            </div>

            <div className='contenedor-texto-nosotros'>
                <p className='nombre-nosotros'>
                    <strong>¿QUIENES SOMOS?</strong>
                </p>
                <p className='texto-nosotros'>
                    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                </p>
                <div className='contenedor-boton'>
                    <button className='button'><strong>Ver Más</strong></button>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;