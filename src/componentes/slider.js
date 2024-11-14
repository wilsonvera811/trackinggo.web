import '../style-sheets/slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules'; // Módulos extra
import 'swiper/css';
import 'swiper/css/effect-coverflow'; // Importa el estilo del efecto
import 'swiper/css/pagination';       // Importa el estilo de la paginación

function Slider() {
  return (
    <Swiper
      className="slider-swiper"  // Aquí se cambia la clase
      effect="coverflow"               // Usa el efecto "Coverflow" como base
      grabCursor={true}                // Cambia el cursor cuando esté sobre el slider
      centeredSlides={false}            // Centra los slides
      slidesPerView="auto"                // Muestra 3 slides a la vez
      coverflowEffect={{
        rotate: 50,                    // Ángulo de rotación de los slides
        stretch: 0,                    // Estiramiento entre los slides
        depth: 100,                    // Profundidad en la perspectiva 3D
        modifier: 1,                   // Modificador de la intensidad del efecto
        slideShadows: true,            // Activa sombras para un efecto más realista
      }}
      pagination={true}                // Activa la paginación
      modules={[EffectCoverflow, Pagination]}  // Incluye los módulos necesarios
    >
      <SwiperSlide className="slider-swiper-slide">
        <img src={require(`../img/tracking-go-slide-Camara.jpg`)} alt="Imagen 1" className="slider-slide-image"/>
      </SwiperSlide>
      <SwiperSlide className="slider-swiper-slide">
        <img src={require(`../img/tracking-go-slide-gps.jpg`)} alt="Imagen 2" className="slider-slide-image"/>
      </SwiperSlide>
      <SwiperSlide className="slider-swiper-slide">
        <img src={require(`../img/tracking-go-slide-Camara.jpg`)} alt="Imagen 3" className="slider-slide-image"/>
      </SwiperSlide>
      <SwiperSlide className="slider-swiper-slide">
        <img src={require(`../img/tracking-go-slide-gps.jpg`)} alt="Imagen 4" className="slider-slide-image"/>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;