import React, { Component } from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";

class DisplayTotal extends Component {
  render() {
    var days = this.props.day.days;

    var totalProfits = {};
    for (var i = 0; i < days.length; i++) {
      if (totalProfits[days[i].date]) {
        totalProfits[days[i].date] += days[i].profit;
      } else {
        totalProfits[days[i].date] = days[i].profit;
      }
    }

    var profitsArray = Object.entries(totalProfits);
    profitsArray.sort((a, b) => {
      const dateA = new Date(a[0]);
      const dateB = new Date(b[0]);
      return dateB - dateA;
    });

    return (
      <Table dark>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Profits</th>
          </tr>
        </thead>
        <tbody>
          {profitsArray.map(([date, profit], idx) => (
            <tr key={idx}>
              <td className="float-center">
                {new Date(date).toLocaleDateString()}
              </td>
              <td className="float-center">${profit.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => ({ day: state.day });

export default connect(mapStateToProps)(DisplayTotal);
