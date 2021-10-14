import React from "react";
import styled, { css } from "styled-components/macro";
import Bars from "../images/bars.png";
import { NavLink as NavLinkReactRouter, Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import RouteTypes from "../routes/RouteTypes";

const Navbar = ({ toggle }) => {
  return (
    <Wrapper className="navMenu">
      <Nav className="nav">
        <Logo className="navLink" to="/">
          OzCar
        </Logo>
        <Menubars onClick={toggle} />
        <NavMenuWrapper>
          {RouteTypes.map((route, index) => {
            if (!route.hide) {
              return (
                <NavItem key={index}>
                  <NavLink
                    className="navLink"
                    tag={NavLinkReactRouter}
                    exact
                    to={route.path}
                    activeClassName="active"
                  >
                    {route.displayName}
                  </NavLink>
                </NavItem>
              );
            }
          })}
        </NavMenuWrapper>
      </Nav>
    </Wrapper>
  );
};

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const NavMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  .nav {
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background-color: #cd853f;
  }

  .navLink {
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
  }

  .navBtn {
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const Menubars = styled.i`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

export default Navbar;
