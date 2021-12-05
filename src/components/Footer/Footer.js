import React from "react";
import { StyledFooter } from "./Footer.styled";

// svg
import github from "../../images/github.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="f-container">
        <div class="flex-footer">
          <div class="flex-items f01">Made with ♥ by lishu gupta.</div>
          <div class="flex-items f02">
            <div className="social">
              <div className="github"></div>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
