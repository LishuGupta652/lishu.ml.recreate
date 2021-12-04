import React, { useContext } from "react";
import { StyledHeader, StyledNavbar, HeaderText } from "./Header.styled";
import patternImg from "../../images/pattern.svg";
import { motion } from "framer-motion";

import Typed from "react-typed";

import { Theme } from "../../contextapi/ThemeContext";

const Header = () => {
  const [theme, setTheme] = useContext(Theme);
  const textVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };

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
            onClick={() =>
              setTheme((theme) => {
                return theme === "dark" ? "light" : "dark";
              })
            }
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
          src={patternImg}
          className="pi"
        />
      </StyledHeader>
    </div>
  );
};

export default Header;
