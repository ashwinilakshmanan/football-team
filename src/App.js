import logo from "./logo.svg";
import "./App.css";
import Teams from "./component/Teams";
import TeamForm from "./component/TeamForm";
import PlayerForm from "./component/PlayerForm";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Players from "./component/Players";
import Sample from "./component/Sample";
import TeamDetails from "./component/TeamDetails";

function App() {
  return (
    <>
      {/* <div>App</div>
    <Teams/>
    
     <TeamForm/>
    <PlayerForm/> */}
      <Header />
      {/* <Sample/> */}
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teamDetails" element={<TeamDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
