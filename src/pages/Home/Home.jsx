import { React, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Logo from '../../assets/image/logo.png'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function Home() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='home'>
      <div className="home__container">
        <div className="home__container__inner">
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
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide><h2><strong>119 000</strong> сум</h2></SwiperSlide>
            <SwiperSlide><h2><strong>119 000</strong> сум</h2></SwiperSlide>
            <SwiperSlide><h2><strong>119 000</strong> сум</h2></SwiperSlide>
            <SwiperSlide><h2><strong>119 000</strong> сум</h2></SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>

        </div>
      </div>
    </div>
  )
}

export default Home