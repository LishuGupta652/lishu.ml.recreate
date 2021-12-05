import React, { useContext, useState } from "react";
import { StyledHeader, StyledNavbar, HeaderText } from "./Header.styled";
import { motion } from "framer-motion";
// Images
import patternImg from "../../images/pattern.svg";
import patternImg2 from "../../images/pattern2.svg";

import Typed from "react-typed";

import { Theme } from "../../contextapi/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useContext(Theme);
  const textVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };
  const userPref = sessionStorage.getItem("theme");

  const [load, setLoad] = useState(false);
  const [delay, setDelay] = useState(0.3);
  if (load) {
    setLoad(true);
    setDelay(0);
  }

  const NavComp = () => {
    return (
      <StyledNavbar>
        <motion.h2
          title="lishu.ml"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay, duration: 0.3 }}
          onClick={() => setTheme()}
        >
          lishu gupta
        </motion.h2>
        {/* opacity 0 in css */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay, duration: 0.3 }}
          className="switch-bar"
        >
          <motion.label class="switch">
            <input
              type="checkbox"
              onClick={() => setTheme()}
              {...(userPref === "light" ? "" : "checked")}
            />
            <span class="slider round"></span>
          </motion.label>
          <p>Dark mode</p>
        </motion.div>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay, duration: 0.3 }}
        >
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <a href="#projects" to="/#projects">
              projects
            </a>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </motion.ul>
      </StyledNavbar>
    );
  };

  const Wrapper = () => {
    return (
      <HeaderText>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay, duration: 0.5 }}
          title="lishu gupta"
        >
          <Typed
            strings={["Web", "Mongoose", "Express", "React", "NodeJS"]}
            backSpeed={50}
            typeSpeed={150}
            startDelay={500}
            loop
          />
          and
          <br />
          <Typed
            strings={["Android", "Flutter", "ReactNative"]}
            backSpeed={50}
            typeSpeed={150}
            startDelay={500}
            loop
          />
          Developer
        </motion.h1>
      </HeaderText>
    );
  };

  const Ilustration = () => {
    return (
      <>
        <motion.img
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 1.1, duration: 0.5 }}
          src={patternImg}
          className="pi"
        />
        <motion.img
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 1.1, duration: 0.5 }}
          src={patternImg}
          className="pi2"
        />
      </>
    );
  };
  return (
    <div>
      <StyledHeader>
        <NavComp />
        <div class="headerSidebar"></div>
        <Wrapper />
        <Ilustration />
      </StyledHeader>
    </div>
  );
};

export default Header;
