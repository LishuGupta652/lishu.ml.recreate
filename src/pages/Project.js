import React from "react";
import Header from "../components/Header/Header";
import Work from "../components/Work/Work";

const Project = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Work showFeatured={false} />
    </div>
  );
};

export default Project;
