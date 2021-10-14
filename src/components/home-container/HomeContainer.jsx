import React from "react";
import styled from "styled-components";
import HeroSlider from "./sections/HeroSlider";
import InfoSection from "./sections/InfoSection";
import { InfoData } from "../../data/InfoData";
import { InfoDataTwo } from "../../data/InfoData";
import { SliderData } from "../../data/SliderData";

const HomeContainer = () => {
  return (
    <Wrapper>
      <HeroSlider slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default HomeContainer;
