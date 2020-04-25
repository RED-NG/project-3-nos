import React, { Component, Fragment } from "react";
import SignUpForm from "../auth/SignUpForm";
import Logout from "../auth/Logout";
import LoginForm from "../auth/LoginForm";
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
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Navbar1 extends Component {
  state = { isOpen: false };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  static propTypes = { auth: PropTypes.object.isRequired };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-3">
            <strong>
              {user ? `Welcome back ${user.firstname} ${user.lastname}` : ""}
            </strong>
          </span>
        </NavItem>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/inventory">Inventory</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projection">Projection</NavLink>
        </NavItem>
        <Logout />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <SignUpForm />
        </NavItem>
        <NavItem>
          <LoginForm />
        </NavItem>
      </Fragment>
    );
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">NoS</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, null)(Navbar1);
