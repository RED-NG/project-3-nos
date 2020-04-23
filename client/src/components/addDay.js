import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addDay } from "../actions/itemActions";

class AddDay extends Component {
  state = {
    modal: false,
    name: "",
    sold: 0,
    date: "",
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const createdDay = {
      name: this.state.name,
      sold: this.state.sold,
      date: this.state.date,
    };

    console.log(`created Item on submit`, createdDay);
    console.log(`created Item on submit`, JSON.stringify(createdDay));

    this.props.addDay(createdDay);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle} className="mb-1">
          Add a day
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Add the day's sales numbers
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Day's sales figures to add:</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name of product"
                  onChange={this.onChange}
                  className="mb-1"
                ></Input>
                <Input
                  type="text"
                  name="sold"
                  id="sold"
                  placeholder="How many units have you sold today?"
                  onChange={this.onChange}
                  className="mb-1"
                ></Input>
                <Input
                  type="text"
                  name="date"
                  id="date"
                  placeholder="Enter today's date"
                  onChange={this.onChange}
                  className="mb-1"
                ></Input>
                <Button color="danger" block>
                  Submit day
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ day: state.day });

export default connect(mapStateToProps, { addDay })(AddDay);
