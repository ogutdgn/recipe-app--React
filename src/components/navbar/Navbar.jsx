import React, { useState } from "react";
import { Nav, Logo, Hamburger, MenuLink, Menu } from "./NavbarStyles";


// import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAbout = () =>{
    setIsOpen(!isOpen)
    window.location.href = "https://ogutdgn.dastugo.com/"
  }

  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen={isOpen}>

        <MenuLink onClick={handleAbout} to="/about">
          About
        </MenuLink>

        <MenuLink onClick={() => window.location.href = "https://github.com/ogutdgn"} to="/github">
          Github
        </MenuLink>

        <MenuLink
          onClick={() => setIsOpen(!isOpen)}
          onMouseUp={() => sessionStorage.clear()}
          to="/">
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
