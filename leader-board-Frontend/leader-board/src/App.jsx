import React from "react";
import  AddUser  from "./Component/AddUser.jsx";
import UpdateScore from "./Component/UpdateScore";
import Leaderboard from "./Component/Leaderboard";
import Rank from "./Component/Rank";

function App() {
  return (
    <div>
      <AddUser/>
      <UpdateScore/>
      <Leaderboard/>
      <Rank/>
    </div>
  );
}

export default App;
