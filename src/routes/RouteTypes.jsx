import React from "react";
import { HomeContainer, AboutContainer } from "../components";
import CarContainer from "../components/car-container/CarContainer";

const RouteTypes = [
  {
    id: "Home",
    path: "/",
    displayName: "OzCar",
    main: HomeContainer,
    hide: true,
    exact: true,
  },
  {
    id: "About",
    path: "/about",
    displayName: "About",
    main: AboutContainer,
  },
  {
    id: "Cars",
    path: "/cars",
    displayName: "Cars",
    main: CarContainer,
  },
  {
    id: "Inspiration",
    path: "/inspiration",
    displayName: "Inspiration",
    main: AboutContainer,
  },
  {
    id: "Contact",
    path: "/contact",
    displayName: "Contact Us",
    main: AboutContainer,
  },
];

export default RouteTypes;
