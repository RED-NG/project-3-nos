import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid/v1";

class Inventory extends Component {
  state = {
    items: [
      { id: uuid(), name: "Coors Light", count: 100, threshold: 10, sold: 86 },
      { id: uuid(), name: "Budweister", count: 100, threshold: 10, sold: 80 },
      { id: uuid(), name: "Stella Artois", count: 75, threshold: 10, sold: 34 },
      {
        id: uuid(),
        name: "Alexander Keiths",
        count: 50,
        threshold: 10,
        sold: 12,
      },
      {
        id: uuid(),
        name: "Belgian Moon",
        count: 50,
        threshold: 10,
        sold: 20,
      },
    ],
  };

  render() {
    const { items } = this.state;
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
                  { id: uuid(), name, count, threshold, sold },
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

export default Inventory;

//name, count, threshold, sold
