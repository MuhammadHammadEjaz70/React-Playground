import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = ({ user }) => {

  

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>User-{user.id}</Card.Title>

        <p>{user.name}</p>
        <p>{user.username}</p>
      </Card.Body>
    </Card>
  );
};

export default Cards;
