import React from "react";
import styled from "styled-components";
import Jumbo from "../../images/jumbo.jpg";
import car7 from "../../images/car7.jpg";
import { Typography } from "@mui/material";
import { Jumbotron, Container, Button } from "reactstrap";
import { fontSize } from "@mui/system";
import { Link } from "react-router-dom";

const AboutContainer = () => {
  return (
    <Wrapper>
      <div>
        <Jumbotron
          fluid
          style={{
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <img src={Jumbo} />
          <Container fluid>
            <h1
              className="display-3"
              style={{ textAlign: "center", padding: 30 }}
            >
              Shape the future
            </h1>
            <p
              className="lead"
              style={{
                textAlign: "center",
                fontSize: "clamp(1rem, 2vw, 1rem)",
              }}
            >
              Audi has always been about progress, about the future. Vorsprung
              durch Technik is imbedded in our DNA. We are constantly striving.
              Constantly progressing. We see possibilities where others see
              impossible. We find inspiration where others see obstacles. We
              know that what we create today, will lead to a better tomorrow.
              For Audi, future is an attitude.
            </p>
          </Container>
        </Jumbotron>
      </div>
      <Section>
        <Container2>
          <ColumnLeft>
            <Typography gutterBottom variant="h4" component="div">
              Lead the way
            </Typography>

            <p
              style={{
                textAlign: "justify",
                fontSize: "clamp(1rem, 2vw, 1rem)",
              }}
            >
              We are constantly striving. Constantly progressing. We see
              possibilities where others see impossible. We find inspiration
              where others see obstacles. We know that what we create today,
              will lead to a better tomorrow. For Audi, future is an attitude.
            </p>
            <p style={{ textAlign: "justify" }}>
              {" "}
              We know that what we create today, will lead to a better tomorrow.
            </p>
            <Link to="/cars">
              <Button style={{ background: "#cd853f" }}>View cars</Button>
            </Link>
          </ColumnLeft>
          <ColumnRight>
            <Image src={car7} />
          </ColumnRight>
        </Container2>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const Container2 = styled.div`
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
  justify-content: center;
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

export default AboutContainer;
