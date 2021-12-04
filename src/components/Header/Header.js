import React from "react";
import { StyledHeader, Navbar, HeaderText } from "./Header.styled";
import patternImg from "../../images/pattern.svg";
import { motion } from "framer-motion/dist/es/index";

import Typed from "react-typed";

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Navbar>
          <h2 title="lishu.ml">lishu gupta</h2>
          <ul>
            <li>blog</li>
            <li>PROJECTS</li>
            <li>log in</li>
          </ul>
        </Navbar>
        <HeaderText>
          <h1 title="lishu gupta">
            <Typed
              strings={["Web", "Mongoose", "Express", "React", "NodeJS"]}
              backSpeed={50}
              typeSpeed={200}
              startDelay={1000}
              loop
            />
            and
            <br />
            <Typed
              strings={["Android", "Flutter", "ReactNative"]}
              backSpeed={50}
              typeSpeed={200}
              startDelay={1000}
              loop
            />
            Developer
          </h1>
        </HeaderText>
        <div class="headerSidebar"></div>
        <img src={patternImg} className="pi" />
      </StyledHeader>
    </div>
  );
};

export default Header;
