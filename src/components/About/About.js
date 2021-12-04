import React from "react";
import { StyledAbout } from "./About.styled";

// Animation on Scroll
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const { inView, entry, ref } = useInView();
  return (
    <StyledAbout>
      <h1>SKILLS</h1>
      <div class="skills" ref={ref}>
        <div class="card one"></div>
        <div class="card two"></div>
        <div class="card three"></div>
        <div class="card four"></div>
        <div class="card five"></div>
        <div class="card six"></div>
      </div>
    </StyledAbout>
  );
};

export default About;
