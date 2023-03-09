import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Posters
import Poster_1 from '../../assets/posters/poster_1.jpg'
import Poster_2 from '../../assets/posters/poster-2.jpg'
import Poster_3 from '../../assets/posters/poster-3.jpg'

function MainSlider() {
  return (
    <>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
        <SwiperSlide>
            <img
                className="object-fill w-full h-96"
                src={Poster_3}
                alt="slide 1"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-fill w-full h-96"
                src={Poster_2}
                alt="slide 2"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className="object-fill w-full h-96"
                src={Poster_1}
                alt="slide 3"
            />
        </SwiperSlide>
    </Swiper>
</>
  )
}

export default MainSlider