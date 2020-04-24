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
import { addItem } from "../actions/itemActions";

class AddForm extends Component {
  state = {
    modal: false,
    name: "",
    count: 0,
    threshold: 0,
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const createdItem = {
      name: this.state.name,
      count: this.state.count,
      threshold: this.state.threshold,
    };

    console.log(`created Item on submit`, createdItem);
    console.log(`created Item on submit`, JSON.stringify(createdItem));

    this.props.addItem(createdItem);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle} className="mb-1">
          Add an item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Add an item into your inventory
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Product to add:</Label>
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
                  name="count"
                  id="count"
                  placeholder="How many units do you have?"
                  onChange={this.onChange}
                  className="mb-1"
                ></Input>
                <Input
                  type="text"
                  name="threshold"
                  id="threshold"
                  placeholder="How many before you need to buy more?"
                  onChange={this.onChange}
                  className="mb-1"
                ></Input>
                <Button color="danger" block>
                  Submit item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ item: state.item });

export default connect(mapStateToProps, { addItem })(AddForm);
