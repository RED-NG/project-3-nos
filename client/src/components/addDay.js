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
    profit: 0,
    modalData: {},
  };

  saleModal = {
    header: "Add a sale you made",
    nameLabel: "Sales figures to add:",
    soldPurchase: "How many units have you sold today?",
    date: "Enter the date this sales occurred",
    profit: "Enter the amount earned from this sale in dollars",
  };

  purchaseModal = {
    header: "Log a purchase you made",
    nameLabel: "Purchases to add",
    soldPurchase: "How many units have you purchased?",
    date: "Enter the date this purchase occurred",
    profit: "Enter the amount spent from this purchase in dollars",
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  showModal = (modalData) => {
    this.setState({ modalData }, this.toggle);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    let createdDay;
    if (this.state.modalData === this.saleModal) {
      createdDay = {
        name: this.state.name,
        sold: -this.state.sold,
        date: this.state.date,
        profit: this.state.profit,
      };
    } else if (this.state.modalData === this.purchaseModal) {
      createdDay = {
        name: this.state.name,
        sold: this.state.sold,
        date: this.state.date,
        profit: -this.state.profit,
      };
    }

    console.log(`created Item on submit`, createdDay);
    console.log(`created Item on submit`, JSON.stringify(createdDay));

    this.props.addDay(createdDay);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="danger"
          onClick={() => this.showModal(this.saleModal)}
          className="mb-1"
        >
          Record a sale
        </Button>
        <Button
          color="danger"
          onClick={() => this.showModal(this.purchaseModal)}
          className="mb-1 ml-3"
        >
          Record a purchase
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {this.state.modalData.header}
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">{this.state.modalData.nameLabel}</Label>
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
                  placeholder={this.state.modalData.soldPurchase}
                  onChange={this.onChange}
                  className="mb-1"
                ></Input>{" "}
                <Input
                  type="date"
                  name="date"
                  id="date"
                  placeholder={this.state.modalData.date}
                  onChange={this.onChange}
                  className="mb-1"
                />
                <Input
                  type="text"
                  name="profit"
                  id="profit"
                  placeholder={this.state.modalData.profit}
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
