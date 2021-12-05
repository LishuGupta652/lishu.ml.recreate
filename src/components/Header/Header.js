import React, { useContext } from "react";
import { StyledHeader, StyledNavbar, HeaderText } from "./Header.styled";
import { motion } from "framer-motion";
// Images
import patternImg from "../../images/pattern.svg";
import patternImg2 from "../../images/pattern2.svg";

import Typed from "react-typed";

import { Theme } from "../../contextapi/ThemeContext";

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
            transition={{ delay: 0.8, duration: 0.3 }}
            onClick={() => setTheme()}
          >
            lishu gupta
          </motion.h2>
          {/* opacity 0 in css */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.9, duration: 0.3 }}
          >
            <label class="switch">
              <input
                type="checkbox"
                onClick={() => setTheme()}
                {...(userPref === "light" ? "" : "checked")}
              />
              <span class="slider round"></span>
            </label>
            <li>blog</li>
            <li>PROJECTS</li>
            <li>log in</li>
          </motion.ul>
        </StyledNavbar>
        <HeaderText>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 1, duration: 0.5 }}
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
          transition={{ delay: 1.1, duration: 0.5 }}
          src={patternImg2}
          className="pi"
        />
        <motion.img
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 1.1, duration: 0.5 }}
          src={patternImg2}
          className="pi2"
        />
      </StyledHeader>
    </div>
  );
};

export default Header;
