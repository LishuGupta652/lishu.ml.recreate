import React, { useContext } from "react";
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

  return (
    <div>
      <StyledHeader>
        <StyledNavbar>
          <motion.h2
            title="lishu.ml"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.5, duration: 0.3 }}
            onClick={() => setTheme()}
          >
            lishu gupta
          </motion.h2>
          {/* opacity 0 in css */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="switch-bar"
          >
            <div>
              <div className="switch-icon" onClick={() => setTheme()}>
                {userPref === "light" ? (
                  <svg className="icon" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"
                    />
                  </svg>
                ) : (
                  <svg className="icon" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
                    />
                  </svg>
                )}
              </div>
            </div>
            {/* <motion.label class="switch">
              <input
                type="checkbox"
                onClick={() => setTheme()}
                {...(userPref === "light" ? "" : "checked")}
              />
              <span class="slider round"></span>
            </motion.label>
            <p>{theme === "dark" ? "Light" : "Dark"} mode</p> */}
          </motion.div>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.5, duration: 0.3 }}
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
        <HeaderText>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.4, duration: 0.5 }}
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
        <div class="headerSidebar"></div>
        <motion.img
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.5, duration: 0.5 }}
          src={patternImg}
          className="pi"
        />
        <motion.img
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.5, duration: 0.5 }}
          src={patternImg}
          className="pi2"
        />
      </StyledHeader>
    </div>
  );
};

export default Header;
