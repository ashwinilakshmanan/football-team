import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { TeamsList } from "./TeamsList";
import { PlayerList } from "./PlayersList";
import { addPlayerToTeam, removePlayerFromTeam } from "../actions/teamActions";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TeamList } from "./TeamsList";
import "./styles.css";
import { AiFillDelete } from "react-icons/ai";

export default function Teams() {
  const [teamData, setTeamData] = useState();
  const { teams } = useSelector((state) => {
    return state?.teamsReducer;
  });
  useEffect(() => {
    //console.log("teamsss",teams)
    setTeamData(teams);
  }, [teams]);
  return (
    <>
      <div
        style={{ marginBottom: "50px" }}
        className=" d-flex flex-wrap"
      >
        {teamData?.map((team) => {
          return (
            <Card
              className="card h-100 text-center p-3 m-2"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                className="teamimg"
                src={team?.logo}
                height250px
              />
              <Card.Body className="card-body">
                <div className=" text-center cardtxt">
                  <Card.Title>{team?.name}</Card.Title>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}
