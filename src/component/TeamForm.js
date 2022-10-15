import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PlayerForm from "./PlayerForm";

export default function TeamForm() {
  return (
    <>
      <h3 className="m-5">Football Team</h3>
      <Form>
        
        <input type={"text"} placeholder="Team Id" className="m-5 mt-3" />
        <input type={"text"} placeholder="Team Name" />
        <Button variant="info" className="text-center">Add Team</Button>
        <PlayerForm/>
      </Form>
      
      
    </>
  );
}
