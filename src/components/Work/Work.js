import React from "react";
import { FlexContainer, StyledWork } from "./Work.styled";

import { motion } from "framer-motion";

// images
import dwarf from "../../images/project/dwarf.jpg";
import scsit from "../../images/project/scsit.jpg";
import whatsapp from "../../images/project/whatsapp.jpg";
import instagram from "../../images/project/instagram.jpg";
import azael from "../../images/project/azaelindia.jpg";

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
        desc={"Complete Responsive Design made with ReactJS, Firebase"}
      />
      <SingleWork
        title={"scs.dauniv.ac.in"}
        img={scsit}
        link={"http://www.scs.dauniv.ac.in/"}
        desc={"Complete Responsive Design made with ReactJS, Firebase"}
      />
      <SingleWork
        title={"whatsapp"}
        img={whatsapp}
        link={"https://whatsappcosmos.web.app/"}
        desc={"Complete Responsive Design made with ReactJS, Firebase"}
      />
      <SingleWork
        title={"instagramclone"}
        img={instagram}
        link={"https://instagramclonecosmos.web.app/"}
        desc={"Complete Responsive Design made with ReactJS, Firebase"}
      />
      <SingleWork
        title={"azaelindia"}
        img={azael}
        link={"https://azaelindia.in/"}
        desc={"Complete Responsive Design made with ReactJS, Firebase"}
      />
    </StyledWork>
  );
};

const SingleWork = ({ img, title, link, desc }) => {
  return (
    <FlexContainer>
      <div class="flex-container">
        <div class="flex-items item01">
          <img src={img} alt={title} />
        </div>
        <div class="flex-items item02">
          <div className="card">
            <div className="head">
              <a href={link} target="_blank">
                <h1 title={title}>{title}</h1>
              </a>
            </div>
            <div className="body">{desc}</div>
          </div>
        </div>
      </div>
    </FlexContainer>
  );
};

export default Work;
