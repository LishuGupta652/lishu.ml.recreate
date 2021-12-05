import React, { useRef, useEffect } from "react";
import { FlexContainer, StyledWork } from "./Work.styled";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

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

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const textVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };
  const wrapperRef = useRef(null);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  if (inView) {
    gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y: 20, scale: 0.95 },
      {
        duration: 0.15,
        autoAlpha: 1,
        scale: 1,
        y: 0,
        ease: "power3",
        scrollTrigger: {
          id: "sectionref",
          trigger: wrapperRef.current,
          toggleActions: "play none none none",
          start: "top center",
          //   end: "bottom center",
          //   toggleClass: "active",
        },
      }
    );
  }

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

  return (
    <StyledWork>
      <h2>projects & works</h2>
      <SingleWork
        title={"dwarf.co.in"}
        link={"http://www.dwarf.co.in/"}
        img={dwarf}
        desc={"Complete Responsive Design made with ReactJS, Firebase"}
      />
      <div class="work">
        <SingleWork
          ref={ref}
          title={"scs.dauniv.ac.in"}
          img={scsit}
          link={"http://www.scs.dauniv.ac.in/"}
          desc={"Complete Responsive Design made with ReactJS, Firebase"}
        />
      </div>
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
        title={"Hotel booking App"}
        img={hotel}
        link={"https://hotelapp.lishu.ml/"}
        desc={"Complete Responsive Design made with ReactJS, Firebase"}
      />
      <SingleWork
        title={"Paying Guest App"}
        img={payingguest}
        link={"http://www.payingguest.ml/"}
        desc={"Complete Responsive Design made with ReactJS, Firebase"}
      />
      <SingleWork
        title={"Scribbling Pens"}
        img={scribble}
        link={"https://sp.lishu.ml/"}
        desc={"Complete Responsive Design made with ReactJS, Firebase"}
      />
      <SingleWork
        title={"Authentication With social sites"}
        img={auth}
        desc={"Complete Responsive Design made with ReactJS, Firebase"}
      />
      <SingleWork
        title={"Facerecognition using ReactJS"}
        img={detect}
        desc={"Complete Responsive Design made with ReactJS, Firebase"}
      />
      <SingleWorkVideo
        title={"automated Gaming"}
        video={trex}
        desc={"Complete Responsive Design made with ReactJS, Firebase"}
      />
    </StyledWork>
  );
};

const SingleWork = ({ img, title, link, desc, ref }) => {
  return (
    <FlexContainer>
      <div className="animScroll">
        <div class="flex-container" ref={ref}>
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
      </div>
    </FlexContainer>
  );
};

const SingleWorkVideo = ({ video, title, link, desc }) => {
  return (
    <FlexContainer>
      <div className="">
        <div class="flex-container">
          <div class="flex-items item01">
            <video loop autoStart autoPlay src={video} type="video/mp4" />
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
      </div>
    </FlexContainer>
  );
};

export default Work;
