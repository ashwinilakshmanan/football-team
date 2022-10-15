import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { addPlayerToTeam } from '../actions/teamActions';

export default function Sample() {
    const players=useSelector(state=>state?.sample.playersList);
    const[teamId,setTeamId]=useState(0);
    const dispatch=useDispatch()
    const addPlayer=(player)=>{
      console.log("player:",player,"teamid:",teamId)
      dispatch(addPlayerToTeam(teamId,player))
    }
  return (
    <>
    team id: <input type={"text"} onChange={(event)=>{
      const id=Number(event.target.value);
      setTeamId(id);
    }}/>
    <hr/>
    {
      players.map(p=>{
        return <h2> {p.name} <Button onClick={()=>{addPlayer(p)}}>Add player to team</Button></h2>
      })
    }
    </>
  )
}
