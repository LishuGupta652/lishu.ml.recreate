import React from "react";
import { FlexContainer, StyledWork } from "./Work.styled";

import { motion } from "framer-motion";

// images
import dwarf from "../../images/project/dwarf.jpg";
import scsit from "../../images/project/scsit.jpg";

const Work = () => {
  const textVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <StyledWork>
      <h2>projects & works</h2>
      <SingleWork
        title={"dwarf.co.in"}
        link={"http://www.dwarf.co.in/"}
        img={dwarf}
      />
      <SingleWork
        title={"scs.dauniv.ac.in"}
        img={scsit}
        link={"http://www.scs.dauniv.ac.in/"}
      />
      <SingleWork
        title={"dwarf.co.in"}
        img={dwarf}
        link={"http://www.scs.dauniv.ac.in/"}
      />
    </StyledWork>
  );
};

const SingleWork = ({ img, title, link }) => {
  return (
    <FlexContainer>
      <div class="flex-container">
        <div class="flex-items item01">
          <img src={img} alt="" />
        </div>
        <div class="flex-items item02">
          <div className="card">
            <div className="head">
              <a href={link} target="_blank">
                <h1>{title}</h1>
              </a>
            </div>
            <div className="body">
              Complete Responsive Design made with ReactJS, Firebase
            </div>
          </div>
        </div>
      </div>
    </FlexContainer>
  );
};

export default Work;
