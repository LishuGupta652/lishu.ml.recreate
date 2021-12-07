import React from "react";
import styled from "styled-components";
import Skills from "../components/About/Skills";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Work from "../components/Work/Work";

import { Helmet } from "react-helmet";
import Contact from "../components/Contact/Contact";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="A young and passionate developer. Working with Javascript (NodeJS, Express, ReactJS, React Native), Dart (Flutter), Python (ML)."
        />
        <link rel="apple-touch-icon" href="lishu.jpg" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Lishu gupta | Portfolio</title>
        <meta name="title" content="Lishu gupta | Portfolio" />
        <meta
          name="description"
          content="A young and passionate developer. Working with Javascript (NodeJS, Express, ReactJS, React Native), Dart (Flutter), Python (ML)."
        />

        <meta
          name="keywords"
          content=" Lishu gupta, lishu, lishugupta652, gitman, pakkabaniya"
        />
        <meta name="author" content="Lishu Gupta" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lishu.ml/" />
        <meta property="og:title" content="Lishu gupta | Portfolio" />
        <meta
          property="og:description"
          content="A young and passionate developer. Working with Javascript (NodeJS, Express, ReactJS, React Native), Dart (Flutter), Python (ML)."
        />
        <meta property="og:image" content="/lishu.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.lishu.ml/" />
        <meta property="twitter:title" content="Lishu gupta | Portfolio" />
        <meta
          property="twitter:description"
          content="A young and passionate developer. Working with Javascript (NodeJS, Express, ReactJS, React Native), Dart (Flutter), Python (ML)."
        />
        <meta property="twitter:image" content="/lishu.jpg" />
      </Helmet>
      <Header />
      <Skills />
      <Work showFeatured={true} />
      <Contact />
    </div>
  );
};

export default Home;
