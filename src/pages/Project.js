import React from "react";
import Header from "../components/Header/Header";
import Work from "../components/Work/Work";

import { Helmet } from "react-helmet";

const Project = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Projects | Lishu gupta</title>
        <meta name="author" content="Lishu Gupta" />
      </Helmet>
      <Header />
      <Work showFeatured={false} />
    </div>
  );
};

export default Project;
