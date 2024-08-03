// bootstrap imports for navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// logo import
import logo from "../../assets/logo.png";

import styles from "./NavbarItem.module.css";
import { Link, NavLink } from "react-router-dom";

function NavbarItem() {
  return (
    <Navbar
      expand="lg"
      className={styles.navbar}
      sticky="top"
      variant="light"
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand to="/">
          <img
            src={logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink className="nav-link" role="button" tabIndex="0" to="/">
              Home
            </NavLink>
            <NavDropdown title="Activities" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to="/adventurepark" className="dropdown-item">
                  Adventure Park
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/nightcamps" className="dropdown-item">
                  Night Camps
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/mountaintreks" className="dropdown-item">
                  Mountain Treks
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/weekendgateway" className="dropdown-item">
                  Weekend Gateway
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              className="nav-link"
              role="button"
              tabIndex="0"
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              className="nav-link"
              role="button"
              tabIndex="0"
              to="/aboutus"
            >
              About Us
            </NavLink>
            <NavLink
              className="nav-link"
              role="button"
              tabIndex="0"
              to="/volunteer"
            >
              Volunteer
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarItem;
