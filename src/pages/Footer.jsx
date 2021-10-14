import styled from "styled-components";
import React from "react";

const Footer = () => {
  return (
    <Wrapper>
      <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3">
          OzCar 2021 Copyright:
          <a href="http://localhost:3000/"> OzCar.com</a>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default Footer;
