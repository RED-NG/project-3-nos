import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import PropTypes from "prop-types";

class Inventory extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter an item");
            const count = prompt("How many do you have in your inventory?");
            const threshold = prompt(
              "At what quantity count would you need to order more?"
            );
            const sold = prompt("How many units have you sold today?");
            if ((name, count, threshold, sold)) {
              this.setState((state) => ({
                items: [
                  ...state.items,
                  { id: uuidv4(), name, count, threshold, sold },
                ],
              }));
            }
          }}
        >
          Add an item
        </Button>
        <ListGroup>
          <TransitionGroup className="inventory-list">
            {items.map(({ id, name, count, threshold, sold }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="removeItemBtn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState((state) => ({
                        items: state.items.filter((item) => item.id !== id),
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  Item: {name}, Inventory Count: {count}, Threshold Limit:{" "}
                  {threshold}, Total Sold: {sold}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
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

export default connect(mapStateToProps, { getItems })(Inventory);

//name, count, threshold, sold
