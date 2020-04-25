import React, { Component } from "react";
import SignUpForm from "../auth/SignUpForm";
import Logout from "../auth/Logout";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

class Navbar1 extends Component {
  state = { isOpen: false };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">NoS</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/inventory">Inventory</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projection">Projection</NavLink>
                </NavItem>
                <NavItem>
                  <SignUpForm />
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <Logout />
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navbar1;
