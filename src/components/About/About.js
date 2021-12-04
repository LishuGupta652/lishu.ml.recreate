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
        <div class="card one">
          <div className="head">
            <h2>React JS</h2>
          </div>
          <div className="body">
            <p>
              React Function components, React Hooks and React Router and state
              maintainance using Redux and ContextApi
            </p>
          </div>
        </div>
        <div class="card two">
          <div className="head">
            <h2>Express, MongoDB & Firebase</h2>
          </div>
          <div className="body">
            <p>
              Made full stack applications using REST APIs, MongoDB & Firebase
            </p>
          </div>
        </div>
        <div class="card three">
          <div className="head">
            <h2>Data Structure & algo</h2>
          </div>
          <div className="body">
            <p>
              5 star coder on HackerRank. Got Knowledge of Multiple Programming
              language
            </p>
          </div>
        </div>
        <div class="card four">
          <div className="head">
            <h2>Javascript</h2>
            <p>Strong hold on Javascript and library to work with.</p>
          </div>
          <div className="body">
            <p></p>
          </div>
        </div>
        <div class="card five">
          <div className="head">
            <h2>Typescript</h2>
          </div>
          <div className="body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              nulla sed unde nemo eaque iste ipsa, laborum ex. Delectus nihil
              dolore eligendi adipisci quod optio quo nam vero soluta
              perferendis?
            </p>
          </div>
        </div>
        <div class="card six">
          <div className="head">
            <h2>NextJs</h2>
          </div>
          <div className="body">
            <p>
              Used NextJs for server side rendering to make react app more
              performant.
            </p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
