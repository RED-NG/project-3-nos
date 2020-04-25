import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Alert,
  Label,
  Input,
  NavLink,
} from "reactstrap";
import { connect } from "react-redux";
import { signupUser } from "../../actions/authActions";
import { clearAllErr } from "../../actions/errorActions";
import PropTypes from "prop-types";

class SignUpForm extends Component {
  state = {
    modal: false,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    signupUser: PropTypes.func.isRequired,
    clearAllErr: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "SIGNUP_FAILED") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    this.props.clearAllErr();
    this.setState({ modal: !this.state.modal });
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, password } = this.state;

    const createdUser = { firstname, lastname, email, password };

    this.props.signupUser(createdUser);
    // console.log(`created Item on submit`, createdItem);
    // console.log(`created Item on submit`, JSON.stringify(createdItem));

    // this.toggle();
  };

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href="#">
          Register
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Sign up for an account!
          </ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="dark">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Product to add:</Label>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter your first name"
                  onChange={this.onChange}
                  className="mb-1"
                ></Input>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter your last name"
                  onChange={this.onChange}
                  className="mb-1"
                ></Input>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  onChange={this.onChange}
                  className="mb-1"
                ></Input>{" "}
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter a password"
                  onChange={this.onChange}
                  className="mb-1"
                ></Input>
                <Button color="danger" block>
                  Sign up
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { signupUser, clearAllErr })(
  SignUpForm
);
