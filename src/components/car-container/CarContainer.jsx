import React from "react";
import styled from "styled-components";
import CarContainerView from "./sections/CarContainerView";

const CarContainer = () => {
  return (
    <Wrapper>
      <CarContainerView />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
`;

export default CarContainer;
