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
import { v4 as uuidv4 } from "uuid";

class AddForm extends Component {
  state = {
    modal: false,
    name: "",
    count: 0,
    threshold: 0,
    sold: 0,
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.count]: e.target.value,
      [e.target.threshold]: e.target.value,
      [e.target.sold]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const createdItem = {
      id: uuidv4(),
      name: this.state.name,
      count: this.state.count,
      threshold: this.state.threshold,
      sold: this.state.sold,
    };

    this.props.addItem(createdItem);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle} className="mb-1">
          Add item
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
                  id="item"
                  placeholder="Name of product"
                  onChange={this.onChange}
                  className="mb-1"
                ></Input>
                <Input
                  type="text"
                  name="count"
                  id="itemcount"
                  placeholder="How many do you have?"
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
                <Input
                  type="text"
                  name="sold"
                  id="sold"
                  placeholder="How many have you sold today?"
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
