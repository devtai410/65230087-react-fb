import React, { Component } from "react";
import Card from "react-bootstrap/Card";
export default class Product extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </div>
    );
  }
}
