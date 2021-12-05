import React from "react";
import { StyledWork } from "./Work.styled";

import { motion } from "framer-motion";

const Skills = () => {
  const textVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <StyledWork>
      <div className="container01">
        <h1>dwarf</h1>
      </div>
    </StyledWork>
  );
};

export default Skills;
