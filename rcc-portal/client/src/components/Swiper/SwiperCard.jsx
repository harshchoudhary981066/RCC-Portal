import React from "react";

import { events } from "../../model/events";
import Card from "../../container/Card/Card";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";
import { Pagination } from "swiper";

export default function SwiperCard() {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          991: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
        className="mySwiper py-5"
        onClick={() => navigate("/events/:id")}>
        {events.map((event, index) => {
          return (
            <SwiperSlide key={index}>
              <Card
                image={process.env.PUBLIC_URL + event.image}
                title={event.title}
                date={event.date}
                desc={event.desc}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
