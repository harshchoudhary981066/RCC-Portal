import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <div id="home" className="app__container">
        <div className="app__wrapper app__flex">
          <div className="app__header">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={true}
              pagination={{
                dynamicBullets: true,
              }}
              loop={true}
              className="bg-light"
              modules={[Navigation, Pagination]}>
              <SwiperSlide>
                <h1>Slide 1</h1>
              </SwiperSlide>
              <SwiperSlide>
                <h1>Slide 2</h1>
              </SwiperSlide>
              <SwiperSlide>
                <h1>Slide 3</h1>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// FIXME: this page swiper css coming from swiper.css
