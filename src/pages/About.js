import React from "react";
import Header from "../components/Header/Header";
import { Helmet } from "react-helmet";
import Contact from "../components/Contact/Contact";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>About | Lishu Gupta </title>
        <meta name="title" content="About  | Portfolio" />
        <meta name="author" content="Lishu Gupta" />
      </Helmet>
      <Header />
      <Contact />
    </div>
  );
};

export default About;
