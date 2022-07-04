import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Work from "../components/Work/Work";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { projectArray } from "../projectArray";

const WorkContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  h1 {
    text-align: center;
    color: ${(props) => props.theme.colors.blue};
    text-transform: uppercase;
    font-size: clamp(2rem, 3.5vw, 4rem);
    font-family: "Luxurious Script", cursive;
    letter-spacing: 5px;
    padding: 30px 0;
  }
  h2 {
    text-align: center;
  }
  .videoMainWrap {
    margin: 0 auto;
    width: 100%;
    padding: 30px 0;
  }
  .videoMain {
    width: 100%;
    magin: 0 auto;
    border-radius: 20px;
  }
`;

const ProjectQueryPage = () => {
  const { project } = useParams();
  const projectData = projectArray.find((item) => item.route.includes(project));
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>{projectData.title} | Lishu gupta</title>
        <meta name="title" content="Dwarf | Lishu Gupta" />
        <meta name="author" content="Lishu Gupta" />
      </Helmet>
      <Header />
      <WorkContainer>
        <a href={projectData.link} target="_blank">
          <h1>{projectData.title}</h1>
          <h2>{projectData.desc}</h2>
          <div className="videoMainWrap">
            <img className="videoMain" src={projectData.src} alt="" />
          </div>
        </a>
      </WorkContainer>
    </div>
  );
};

export default ProjectQueryPage;
