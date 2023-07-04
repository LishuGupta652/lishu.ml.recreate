import React from "react";
import styled from "styled-components";
import Skills from "../components/About/Skills";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Work from "../components/Work/Work";

import Contact from "../components/Contact/Contact";
import NFTList from "../components/NFTList";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      {/* <NFTList /> */}
      <Skills />
      <Work showFeatured={true} />
      <Contact />
    </div>
  );
};

export default Home;
