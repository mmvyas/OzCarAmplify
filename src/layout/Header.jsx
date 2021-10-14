import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default Header;
