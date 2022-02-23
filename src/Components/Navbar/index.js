import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          German Almonte
        </NavLogo>
        <Bars />

        <NavMenu>
          <NavLink
            to="/"
            activestyle={{ color: 'black' }}
          >
            Weather App
          </NavLink>
          <NavLink
            to="/Contact"
            activestyle={{ color: 'black' }}
          >
            Contact Me
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;