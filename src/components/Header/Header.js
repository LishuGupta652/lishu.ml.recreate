import React, { useContext } from "react";
import {
  StyledHeader,
  StyledNavbar,
  HeaderText,
  HeaderSideBar,
} from "./Header.styled";
// Global Stules
import { Container } from "../../theme/global.styled";

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
    hidden: { opacity: 0, y: 30 },
  };
  const userPref = sessionStorage.getItem("theme");

  return (
    <div>
      <StyledHeader>
        {/* <StyledNavbar>
          <motion.h2
            title="lishu.ml"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            onClick={() => setTheme()}
          >
            <Link to="/" id="home">
              lishu gupta
            </Link>
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.1, duration: 0.5 }}
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
          </motion.div>
          <motion.ul initial="hidden" animate="visible" variants={textVariants}>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link href="/projects" to="/projects">
                projects
              </Link>
            </li>
            <li>
              <a href="https://auth.lishu.ml/login">login</a>
            </li>
          </motion.ul>
        </StyledNavbar> */}
        <StyledNavbar>
          <Container>
            <Flex>
              <Logo>logo</Logo>
              <Menu>
                <button>
                  <span></span>
                  <span></span>
                </button>
              </Menu>
            </Flex>
          </Container>
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
              strings={[
                "Web2.0",
                "Web3.0",
                "Mongoose",
                "Express",
                "React",
                "NodeJS",
              ]}
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
        <HeaderSideBar>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="social"
          >
            <a href="https://github.com/lishugupta652" target="blank">
              <div className="github icon-container">
                <svg className="icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/lishugupta652/" target="blank">
              <div className="linkedin icon-container">
                <svg className="icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
                  />
                </svg>
              </div>
            </a>

            <a href="https://twitter.com/lishugupta652" target="blank">
              <div className="twitter icon-container">
                <svg className="icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                  />
                </svg>
              </div>
            </a>
          </motion.div>
        </HeaderSideBar>
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
