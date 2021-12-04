import React from "react";
import { StyledAbout } from "./About.styled";

import { motion } from "framer-motion";

const About = () => {
  const textVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <StyledAbout>
      <motion.h3
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        A young and passionate developer engineer. Working with Javascript
        (NodeJS, ReactJS, React Native), Dart (Flutter), Python (ML).
      </motion.h3>
      <h1>SKILLS</h1>
      <div class="skills">
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
            <h2>Android (Flutter, ReactNative)</h2>
            <p>
              Being React Developer i am quite comfortable with React Native and
              had made applications on flutter
            </p>
          </div>
          <div className="body">
            <p></p>
          </div>
        </div>
        <div class="card five">
          <div className="head">
            <h2>API Design</h2>
          </div>
          <div className="body">
            <p>
              Created many api with mongoose db as backend and express related
              to Blog post and User Auth.
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
