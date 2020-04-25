import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";

class MasterTable extends Component {
  render() {
    var items = this.props.item.items;
    var days = this.props.day.days;

    var totalInventory = {};
    items.forEach((item) => {
      totalInventory[item.name] = {
        _id: item._id,
        count: item.count,
        threshold: item.threshold,
      };
    });

    days.forEach((day) => {
      if (totalInventory[day.name]) {
        totalInventory[day.name].count += day.sold;
      }
    });

    return (
      <Table dark>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Current Stock Count</th>
            <th>Threshold Count</th>
            <th>Delete item</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(totalInventory).map((row) => {
            const [name, data] = row;
            const { _id, count, threshold } = data;

            let stockStatus;
            if (count <= threshold) {
              stockStatus = "low-stock";
            } else {
              stockStatus = "in-stock";
            }

            return (
              <tr key={_id} className={stockStatus}>
                <td className="float-center">{name}</td>
                <td className="float-center">{count}</td>
                <td className="float-center">{threshold}</td>
                <td>
                  <Button
                    className="removeItemBtn float-center"
                    color="danger"
                    size="sm mr-1"
                    onClick={this.props.onDelete.bind(this, _id)}
                  >
                    &times;
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => ({ day: state.day, item: state.item });

export default connect(mapStateToProps)(MasterTable);
