import React from "react";

import { TypeAnimation } from "react-type-animation";

import { StyledContentBox, StyledHeading, StyledRightBoxWrapper } from "./StyledComponent";
import ShagunBgImage from "../../assets/images/shagun.jpg";

const RightIntro = () => {
  return (
    <StyledRightBoxWrapper>
      <img src={ShagunBgImage} alt="ShagunBg" />
      <StyledContentBox>
        <StyledHeading variant="h1">Welcome to</StyledHeading>
        <StyledHeading variant="h1">
          <TypeAnimation
            className="auma-animation"
            sequence={["", 500, "S", 500, "Sh", 500, "Sha", 500, "Shag", 500, "Shagu", 500, "Shagun", 500]}
            speed={1}
            repeat={Infinity}
          />
        </StyledHeading>
      </StyledContentBox>
    </StyledRightBoxWrapper>
  );
};

export default RightIntro;
