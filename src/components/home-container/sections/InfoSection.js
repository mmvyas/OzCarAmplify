import React from "react";
import styled from "styled-components";
import { Button } from "../../Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const Container = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    display: contents;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? 2 : 1)};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? 1 : 2)};
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? 2 : 1)};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const InfoSection = ({
  heading,
  paraOne,
  paraTwo,
  buttonLabel,
  reverse,
  image,
  imageAlt,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft reverse={reverse}>
          <h1>{heading}</h1>
          <p style={{ textAlign: "justify" }}>{paraOne}</p>
          <p style={{ textAlign: "justify" }}>{paraTwo}</p>
          <Button to="/cars" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <Image src={image} alt={imageAlt} />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
