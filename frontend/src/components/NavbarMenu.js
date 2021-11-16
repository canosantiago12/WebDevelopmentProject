import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink

} from 'reactstrap';

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar
        color="light"
        expand="md"
        light
      >
        <NavbarBrand href="/">
          AnimeFan
        </NavbarBrand>
        <NavbarToggler onClick={() =>  { setIsOpen(!isOpen) }} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="#">
                My Favorites
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                My Friends
              </NavLink>
            </NavItem>
          </Nav>
          <Nav
            className="ms-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/home">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Register
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
