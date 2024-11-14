import '../style-sheets/cards.css'

function Cards(props){
    return(
        <div className='contenedor-card'>
            
            <div className='contenedor-texto-card'>
            <img 
                className='imagen-card'
                src={require(`../img/carro.png`)}
                alt='img-card'
            />
                <p className='servicio-card'>
                    <strong>{props.servicio}</strong>
                </p>
                <p className='texto-card'>
                    "Instalamos camaras en tu vehículo a un excelente precio"
                </p>
            </div>
        </div>
    );
}

export default Cards;