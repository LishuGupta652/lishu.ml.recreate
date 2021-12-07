import React, { useRef, useEffect } from "react";
import { FlexContainer, StyledWork } from "./Work.styled";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation, motion } from "framer-motion";

// intersection observer
import { useInView } from "react-intersection-observer";

// Projects
import { projectArray } from "../../projectArray";

// images

import trex from "../../images/project/dino.webm";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const textVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  hidden: { opacity: 0, y: 40 },
};

const Work = ({ showFeatured }) => {
  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".animScroll", "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-3, 3); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -500);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power4",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(".animScroll", { transformOrigin: "right center", force3D: true });
  }, []);

  const controls = useAnimation();
  const [refView, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <motion.div>
      <StyledWork>
        <h2 id="projects">projects & works</h2>
        {projectArray
          .filter((project) => (showFeatured ? project.featured : true))
          .map(({ title, link, img, desc, route, featured }, i) => {
            return (
              <motion.div custom={i} animate="visible" variants={variants}>
                <SingleWork
                  title={title}
                  link={link}
                  img={img}
                  desc={desc}
                  route={route}
                />
              </motion.div>
            );
          })}

        <SingleWorkVideo
          title={"automated Gaming"}
          video={trex}
          desc={"Complete Responsive Design made with ReactJS, Firebase"}
        />

        {showFeatured && (
          <Link to="/projects">
            <h3 className="show-more">show more</h3>
          </Link>
        )}
      </StyledWork>
    </motion.div>
  );
};

const SingleWork = ({ img, title, link, desc, ref, route }) => {
  return (
    <FlexContainer>
      <motion.div className="animScroll">
        <div class="flex-container" ref={ref}>
          <div class="flex-items item01">
            <Link to={`/project/${route}`}>
              <img src={img} alt={title} />
            </Link>
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
      </motion.div>
    </FlexContainer>
  );
};

const SingleWorkVideo = ({ video, title, link, desc }) => {
  return (
    <FlexContainer>
      <motion.div>
        <div class="flex-container">
          <div class="flex-items item01">
            <video autoStart autoPlay src={video} type="video/mp4" />
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
      </motion.div>
    </FlexContainer>
  );
};

export default Work;
