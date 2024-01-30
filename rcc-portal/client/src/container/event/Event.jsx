import React from "react";

import "./Event.css";

const Event = () => {
  return (
    <>
      <div style={{ marginTop: "0" }} className="app__wrapper">
        <div className="container main">
          <div className="row">
            <div
              className="col-md-8"
              style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
              }}>
              <span className="fw-bolder" style={{ fontSize: "3.5rem" }}>
                Cujo AI Smart Internet Security & Firewall{" "}
              </span>
              <br />
              <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="container main"
                style={{ backgroundColor: "#ADD8E6" }}>
                Deadline: 7th April 2022 @ 3pm EST
                <br />
                <hr />
                <div className="row align-items-start">
                  <div className="col">
                    <div className="row-sm-6">
                      <span className="fw-bold">offline</span>
                    </div>
                    <div className="row-sm-6">
                      <span className="fw-bold">Venu: </span> LG10 Rcc Room
                    </div>
                  </div>
                  <div className="col">
                    <div className="row-sm-6">
                      <span className="fw-bold">Public </span>
                    </div>
                    <div className="row-sm-6">
                      <span className="fw-bold">Duration: </span> 3 weeks
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <hr />
                <div className="col"></div>
              </div>
              <br />
              <a className="btn btn-outline-secondary" href="/home">
                Register Now!!
              </a>
            </div>
          </div>
          <br />
          <br />
          <div></div>
        </div>
      </div>

      <div className="container main">
        <div className="row">
          <article className="col-md-8 my-3">
            <h1 className="event-heading h1">
              Cujo AI Smart Internet Security & Firewall{" "}
            </h1>

            <h3 className="h3 event-subheading">Rules</h3>
            <h3 className="h3 event-subheading">Requirements</h3>
            <h3 className="h3 event-subheading">Prizes</h3>
          </article>
          <article className="col-md-4 my-3">
            <div
              className="container main"
              style={{ backgroundColor: "#ADD8E6" }}>
              Deadline: 7th April 2022 @ 3pm EST
              
              <hr />
              <div className="row align-items-start">
                <div className="col">
                  <div className="row-sm-6">
                    <span className="fw-bold">offline</span>
                  </div>
                  <div className="row-sm-6">
                    <span className="fw-bold">Venu: </span> LG10 Rcc Room
                  </div>
                </div>
                <div className="col">
                  <div className="row-sm-6">
                    <span className="fw-bold">Public </span>
                  </div>
                  <div className="row-sm-6">
                    <span className="fw-bold">Duration: </span> 3 weeks
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Event;
