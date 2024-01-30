import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

// import { useSelector } from "react-redux";

import "./Navbar.scss";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  // const selector = useSelector((state) => state);

  window.addEventListener("scroll", changeNavbarColor);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`app__navbar ${colorChange && "colorChange"}`}>
      <div className="container">
        <ul className="app__navbar-links">
          <li className="app__flex p-text">
            <a href="/">Home</a>
          </li>
          <li className="app__flex p-text">
            <a href="/#events">Events</a>
          </li>
          <li className="app__flex p-text">
            <a href="/login">Login</a>
          </li>
          <li className="app__flex p-text">
            <a href="/register">Register</a>
          </li>
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                <li className="app__flex p-text">
                  <a href="/">Home</a>
                </li>
                <li className="app__flex p-text">
                  <a href="/#events">Events</a>
                </li>
                <li className="app__flex p-text">
                  <a href="/login">Login</a>
                </li>
                <li className="app__flex p-text">
                  <a href="/register">Register</a>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
