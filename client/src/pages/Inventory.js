import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { getItems, deleteItems } from "../actions/itemActions";
import PropTypes from "prop-types";
import AddForm from "../components/addItem";

class Inventory extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDelete = (id) => {
    this.props.deleteItems(id);
  };

  render() {
    const { items } = this.props.item;
    console.log({ items });
    return (
      <Container>
        <AddForm />
        <ListGroup>
          {items.map(({ _id, name, count, threshold, sold }) => (
            <ListGroupItem className="float-left" key={_id}>
              Item name: {name}, Inventory Count: {count}, Threshold stock
              limit: {threshold}, Units sold: {sold}{" "}
              <Button
                className="removeItemBtn float-right"
                color="danger"
                size="sm mr-1"
                onClick={this.onDelete.bind(this, _id)}
              >
                &times;
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

Inventory.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ item: state.item });

export default connect(mapStateToProps, { getItems, deleteItems })(Inventory);

//name, count, threshold, sold
