import React from "react";

import "./Card.scss";

const Card = ({ image, title, date, desc }) => {
  return (
    <>
      <div className="card animation">
        <img src={image} className="card-img-top" alt={title} title={title} />
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 card-title-text-left">
              <h5 className="card-title">{title}</h5>
            </div>
            <div className="col-md-6 card-title-text-right">
              <h5 className="card-title">{date}</h5>
            </div>
          </div>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
