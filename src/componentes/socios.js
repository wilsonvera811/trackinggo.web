import '../style-sheets/socios.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';  // Importa el módulo de autoplay
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import socio1 from '../img/tracking-go-socios-Mobileye.svg';
import socio2 from '../img/tracking-go-socios-Amazon.svg';
import socio3 from '../img/tracking-go-socios-Miro.svg';

function Socios() {
  return (
    <Swiper
      className="socios-swiper"
      spaceBetween={30}                      // Espacio entre imágenes
      slidesPerView={3}                      // Cantidad de imágenes visibles al mismo tiempo
      loop={true}                            // Repetir las imágenes infinitamente
      autoplay={{
        delay: 1,                            // No hay delay entre rotaciones
        disableOnInteraction: false,
      }}
      speed={2000}                           // Velocidad en milisegundos para transición
      modules={[Autoplay]}                   // Solo usar autoplay
    >
      <SwiperSlide className='socios-swiper-slide'>
      <img src={socio1} alt="Imagen 1" width={'100%'} height={"auto"} className="carrusel-image" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={socio2} alt="Imagen 2" width={'100%'} height={"auto"} className="carrusel-image" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={socio3} alt="Imagen 3" width={'100%'} height={"auto"} className="carrusel-image" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={socio1} alt="Imagen 4" width={'100%'} height={"auto"} className="carrusel-image" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Socios;