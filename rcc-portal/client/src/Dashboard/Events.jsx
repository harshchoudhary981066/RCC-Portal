import React from "react";
import { Link } from "react-router-dom";
import SwiperCard from "../components/Swiper/SwiperCard";

const Events = () => {
  return (
    <section className="panel-view">
      <h2 className="panel-view-header">Events Participated</h2>
      <Link to="/new-event" className="btn btn-primary my-2">
        Add new event
      </Link>

      <SwiperCard />
    </section>
  );
};

export default Events;
