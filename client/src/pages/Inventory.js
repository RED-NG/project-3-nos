import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import {
  getItems,
  deleteItems,
  getDays,
  deleteDay,
} from "../actions/itemActions";
import PropTypes from "prop-types";
import AddForm from "../components/addItem";
import AddDay from "../components/addDay";

class Inventory extends Component {
  componentDidMount() {
    this.props.getDays();
    this.props.getItems();
  }

  onDelete = (id) => {
    this.props.deleteItems(id);
  };

  dayDelete = (id) => {
    this.props.deleteDay(id);
  };

  render() {
    const { items } = this.props.item;
    const { days } = this.props.day;
    console.log({ items });
    console.log({ days });
    return (
      <Container>
        <AddForm />
        <ListGroup>
          {items.map(({ _id, name, count, threshold }) => (
            <ListGroupItem className="float-left" key={_id}>
              Item name: {name}, Inventory Count: {count}, Threshold stock
              limit: {threshold}
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
        <AddDay />
        <ListGroup>
          {days.map(({ _id, name, sold, date }) => (
            <ListGroupItem className="float-left" key={_id}>
              Date: {date} - Item name: {name}, Units sold today: {sold}
              <Button
                className="removeItemBtn float-right"
                color="danger"
                size="sm mr-1"
                onClick={this.dayDelete.bind(this, _id)}
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
  getDays: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  day: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ item: state.item, day: state.day });

export default connect(mapStateToProps, {
  getItems,
  deleteItems,
  getDays,
  deleteDay,
})(Inventory);

//name, count, threshold, sold
