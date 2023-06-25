import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import product from "./components/product";
import "./App.css";

const App = () => {
  const firstName = "OUSSAMA";


  return (
    <Container>
      <Card>
        {firstName && <Image product={product} />}
        <Card.Footer>
          <div>Hello, {firstName ? `${firstName}!` : "there!"}</div>
        </Card.Footer>
        <Card.Body>
          <Name product={product} />
          <Price product={product} />
          <Description product={product} />
        </Card.Body>

      </Card>
    </Container>
  );
};

export default App;

