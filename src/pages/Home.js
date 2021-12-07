import React from "react";
import styled from "styled-components";
import Skills from "../components/About/Skills";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Work from "../components/Work/Work";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Skills />
      <Work showFeatured={true} />
    </div>
  );
};

export default Home;
