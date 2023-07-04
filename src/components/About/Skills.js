import React, { useEffect } from "react";
import { StyledAbout } from "./Skills.styled";

import { useAnimation, motion } from "framer-motion";

// intersection observer
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const textVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, y: 40 },
  };
  const controls = useAnimation();

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const [refView, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: i * 0.3 },
      }));
    }
  }, [controls, inView]);

  return (
    <StyledAbout>
      <h1>SKILLS</h1>
      <div class="skills">
        <motion.div
          ref={refView}
          animate={controls}
          variants={textVariants}
          custom={1.1}
          initial="hidden"
          class="card one"
        >
          <div className="head">
            <h2>React JS</h2>
          </div>
          <div className="body">
            <p>
              React Function components, React Hooks and React Router and state
              maintainance using Redux and ContextApi
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={refView}
          animate={controls}
          variants={textVariants}
          custom={1.3}
          initial="hidden"
          class="card two"
        >
          <div className="head">
            <h2>Data Structure & algo</h2>
          </div>
          <div className="body">
            <p>
              5 star coder on HackerRank. Got Knowledge of Multiple Programming
              language
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={refView}
          animate={controls}
          variants={textVariants}
          custom={1.5}
          initial="hidden"
          class="card three"
        >
          <div className="head">
            <h2>Express, MongoDB & Firebase</h2>
          </div>
          <div className="body">
            <p>
              Made full stack applications using REST APIs, MongoDB & Firebase
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={refView}
          animate={controls}
          variants={textVariants}
          custom={1.8}
          initial="hidden"
          class="card four"
        >
          <div className="head">
            <h2>Android (Flutter, ReactNative)</h2>
            <p>
              Being React Developer I am quite comfortable with React Native and
              had made applications on flutter
            </p>
          </div>
          <div className="body">
            <p></p>
          </div>
        </motion.div>
        <motion.div
          ref={refView}
          animate={controls}
          variants={textVariants}
          custom={2}
          initial="hidden"
          class="card five"
        >
          <div className="head">
            <h2>API Design</h2>
          </div>
          <div className="body">
            <p>
              Created many api with mongoose db as backend and express related
              to Blog post and User Auth.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={refView}
          animate={controls}
          variants={textVariants}
          custom={2.3}
          initial="hidden"
          class="card six"
        >
          <div className="head">
            <h2>NextJs</h2>
          </div>
          <div className="body">
            <p>
              Used NextJs for server side rendering to make react app more
              performant.
            </p>
          </div>
        </motion.div>
      </div>
    </StyledAbout>
  );
};

export default Skills;
