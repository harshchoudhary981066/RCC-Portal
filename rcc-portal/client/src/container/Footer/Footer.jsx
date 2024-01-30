import React from "react";

import "./Footer.scss";

import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <section>
          <div className="row">
            {/* <div className="col-md-6"></div> */}
            {/* <div className="col-md-6"> */}
            <ul className="socials">
              <li>
                <a href="/">
                  <FaLinkedin size={32} color={"#000"} />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaInstagram size={32} color={"#000"} />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaYoutube size={32} color={"#000"} />
                </a>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </section>
        <section id="copyright">
          <p>Copyright @2022 | RCC</p>
        </section>
      </div>
    </>
  );
};

export default Footer;
