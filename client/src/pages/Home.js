import React from "react";
import { Jumbotron, Container } from "reactstrap";

function Home() {
  return (
    <div className="home-bg-pic">
      <Container className=".col-sm-12 .col-md-6 .offset-md-3">
        <Jumbotron>
          <h1 className="display-3">No stock? No problem!</h1>
          <p className="lead">
            NoS is an application designed for business owners looking for a
            solution to simplify inventory management.
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
