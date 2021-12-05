import React from "react";
import styled from "styled-components";
import Skills from "../components/About/Skills";
import Header from "../components/Header/Header";
import Work from "../components/Work/Work";

const Home = () => {
  return (
    <div>
      <Header />
      <Skills />
      <Work />
    </div>
  );
};

export default Home;
