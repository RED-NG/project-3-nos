import React, { Component } from "react";
import { Container, Button, Table } from "reactstrap";
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
        <Table dark>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Total Inventory Count</th>
              <th>Threshold</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ _id, name, count, threshold }) => (
              <tr key={_id}>
                <td className="float-center">{name}</td>
                <td className="float-center">{count}</td>
                <td className="float-center">{threshold}</td>
                <td>
                  <Button
                    className="removeItemBtn float-center"
                    color="danger"
                    size="sm mr-1"
                    onClick={this.onDelete.bind(this, _id)}
                  >
                    &times;
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <AddDay />
        <Table dark>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product name</th>
              <th>Units sold</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {days.map(({ _id, name, sold, date }) => (
              <tr key={_id}>
                <td className="float-center">{date}</td>
                <td className="float-center">{name}</td>
                <td className="float-center">{sold}</td>
                <td>
                  <Button
                    className="removeItemBtn float-center"
                    color="danger"
                    size="sm mr-1"
                    onClick={this.onDelete.bind(this, _id)}
                  >
                    &times;
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
