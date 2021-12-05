import React from "react";
import { StyledWork } from "./Work.styled";

import { motion } from "framer-motion";

// images
import dwarf from "../../images/project/dwarf.jpg";

const Skills = () => {
  const textVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <StyledWork>
      <h2>projects</h2>
      <div class="flex-container">
        <div class="flex-items item01">
          <img src={dwarf} alt="" />
        </div>
        <div class="flex-items item02">
          <div className="card">
            <div className="head">
              <h1>dwarf.co.in</h1>
            </div>
            <div className="body">
              Complete Responsive Design made with ReactJS, Firebase
            </div>
          </div>
        </div>
      </div>
    </StyledWork>
  );
};

export default Skills;
