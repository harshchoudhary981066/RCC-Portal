import React from "react";
import Header from "../Header/Header";
import Swiper from "../../components/Swiper/SwiperCard";

const Main = () => {
  return (
    <>
      <Header />

      <div className="container main">
        <div className="row">
          <div className="col-md-6 my-3">
            <h1>About</h1>
            <p className="p-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              ipsam, perspiciatis quo quia cupiditate dicta saepe obcaecati
              facilis error earum atque, deserunt recusandae commodi a labore
              provident incidunt officiis consequuntur eos eius culpa nobis
              suscipit? Tempora, architecto exercitationem animi nulla esse quis
              praesentium rem maiores dicta, ratione nostrum ipsam maxime
              eveniet. At ratione corrupti tempore corporis eius eaque totam
              quae veritatis recusandae aperiam laboriosam ea rem, omnis
              temporibus voluptates iure illo nam ab iusto officia consectetur
              ipsam inventore quod? Pariatur vitae harum velit id, consectetur
              accusantium sed alias, ducimus cumque officia blanditiis quos
              rerum eveniet tempora fuga. Quaerat, cupiditate officiis.
            </p>
          </div>
          <div className="col-md-6 my-3">
            <img
              src={process.env.PUBLIC_URL + "assets/about_img.png"}
              alt="about"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div id="events" style={{ padding: "3rem 0" }}></div>

      <div className="container">
        <h1 className="text-center">Events</h1>

        <article>
          <h2>Live</h2>
          <Swiper />
        </article>

        <article>
          <h2>Upcoming</h2>
          <Swiper />
        </article>

        <article>
          <h2>Ended</h2>
          <Swiper />
        </article>
      </div>
    </>
  );
};

export default Main;
