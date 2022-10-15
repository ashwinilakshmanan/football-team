import React from "react";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function PlayerForm() {
  return (
    <>
    <div >
      <Form className="player-form" >
        <div className="d-flex ">
        <input type={"text"} placeholder="Player Id" />
        <input type={"text"} placeholder="Player Name" />
        
        <Dropdown >
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Position
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item value="GoalKeeper">GoalKeeper</Dropdown.Item>
            <Dropdown.Item value="Defensive">Defensive</Dropdown.Item>
            <Dropdown.Item value="MidField">MidField</Dropdown.Item>
            <Dropdown.Item value="Attacking">Attacking</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <input type={"file"} className="form-controll"/>
        </div>
        <Button className="text-center">AddPlayer</Button>
      </Form>
      </div>
    </>
  );
}
