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
import "./Inventory.css";
import DisplayTotal from "../components/displayTotalRow";
import MasterTable from "../components/masterInventoryTable";

class Inventory extends Component {
  componentDidMount() {
    this.props.getDays();
    this.props.getItems();
  }

  dayDelete = (id) => {
    this.props.deleteDay(id);
  };

  render() {
    // const { items } = this.props.item;
    const { days } = this.props.day;

    const totals = Object.create(null);
    days.forEach(({ name, sold }) => {
      const currentTotal = totals[name] || 0;
      totals[name] = currentTotal + sold;
    });

    return (
      <Container>
        <AddForm />
        <MasterTable onDelete={this.props.deleteItems} />
        <AddDay />
        <Table dark>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product name</th>
              <th>Units bought/sold</th>
              <th>Profit/Cost</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {days.map(({ _id, name, sold, date, profit }) => (
              <tr key={_id}>
                <td className="float-center">
                  {new Date(date).toLocaleDateString()}
                </td>
                <td className="float-center">{name}</td>
                <td className="float-center">{sold}</td>
                <td className="float-center">{profit}</td>
                <td>
                  <Button
                    className="removeItemBtn float-center"
                    color="danger"
                    size="sm mr-1"
                    onClick={this.dayDelete.bind(this, _id)}
                  >
                    &times;
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <DisplayTotal />
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
