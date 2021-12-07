import React, { useRef, useEffect } from "react";
import { FlexContainer, StyledWork } from "./Work.styled";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation, motion } from "framer-motion";

// intersection observer
import { useInView } from "react-intersection-observer";

// images
import dwarf from "../../images/project/dwarf.jpg";
import scsit from "../../images/project/scsit.jpg";
import whatsapp from "../../images/project/whatsapp.jpg";
import instagram from "../../images/project/instagram.jpg";
import azael from "../../images/project/azaelindia.jpg";
import hotel from "../../images/project/dwarf02.jpg";
import payingguest from "../../images/project/payingguest.jpg";
import scribble from "../../images/project/scribble.jpg";
import auth from "../../images/project/authpassport.jpg";
import detect from "../../images/project/gitmandetect.jpg";
import trex from "../../images/project/dino.webm";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const squareVariants = {
  visible: { opacity: 1, y: 0, transition: { delay: 2, duration: 1 } },
  hidden: { opacity: 0, y: 40 },
};

const Work = ({ showFeatured }) => {
  const textVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };

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

  const projectArray = [
    {
      title: "dwarf.co.in",
      link: "http://www.dwarf.co.in/",
      img: dwarf,
      desc: "Complete Responsive Design made with ReactJS, Firebase",
      route: "dwarf/#home",
      featured: true,
    },
    {
      title: "scs.dauniv.ac.in",
      link: "http://www.scs.dauniv.ac.in/",
      img: scsit,
      desc: "Complete Responsive Design made with ReactJS, Firebase",
      route: "scsit/#",
      featured: true,
    },
    {
      title: "whatsapp",
      link: "https://whatsappcosmos.web.app/",
      img: whatsapp,
      desc: "Complete Responsive Design made with ReactJS, Firebase",
      route: "whatsapp/#",
      featured: true,
    },
    {
      title: "instagramclone",
      link: "ttps://instagramclonecosmos.web.app/",
      img: instagram,
      desc: "Complete Responsive Design made with ReactJS, Firebase",
      route: "instagram/#",
      featured: true,
    },
    {
      title: "scs.dauniv.ac.in",
      link: "http://www.scs.dauniv.ac.in/",
      img: scsit,
      desc: "Complete Responsive Design made with ReactJS, Firebase",
      route: "scsit/#",
      featured: false,
    },
    {
      title: "Hotel booking App",
      link: "https://hotelapp.lishu.ml/",
      img: hotel,
      desc: "Complete Responsive Design made with ReactJS, Firebase",
      route: "hotel/#",
      featured: false,
    },
    {
      title: "Paying Guest App",
      link: "http://www.payingguest.ml/",
      img: payingguest,
      desc: "Complete Responsive Design made with ReactJS, Firebase",
      route: "payingguest/#",
      featured: false,
    },
    {
      title: "Scribbling Pens",
      link: "https://sp.lishu.ml/",
      img: scribble,
      desc: "Complete Responsive Design made with ReactJS, Firebase",
      route: "hotel/#",
      featured: false,
    },
    {
      title: "Facerecognition using ReactJS",
      link: "https://sp.lishu.ml/",
      img: detect,
      desc: "Complete Responsive Design made with ReactJS, Firebase",
      route: "detect/#",
      featured: false,
    },
    {
      title: "Azael India",
      link: "#",
      img: azael,
      desc: "Complete Responsive Design made with ReactJS, Firebase",
      route: "detect/#",
      featured: false,
    },
  ];
  const controls = useAnimation();
  const [refView, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={refView} variants={textVariants} animate={controls}>
      <StyledWork>
        <h2 id="projects">projects & works</h2>
        {projectArray
          .filter((project) => (showFeatured ? project.featured : true))
          .map(({ title, link, img, desc, route, featured }) => {
            return (
              <SingleWork
                title={title}
                link={link}
                img={img}
                desc={desc}
                route={route}
              />
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
      <motion.div variants={squareVariants} className="square">
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
