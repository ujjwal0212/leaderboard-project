import React, { useState } from "react";
import { updateScore } from "../Services/api";

function UpdateScore() {
  const [id, setId] = useState("");
  const [score, setScore] = useState("");
  const handleSubmit = async () => {
    if (!id || !score) {
    alert("Please enter ID and Score");
    return;
    }
    await updateScore(id, score);
    alert("Score Updated");
  };
  return (
    <div>
      <h3>Update Score</h3>
      <input placeholder="User ID" onChange={(e) => setId(e.target.value)}/>
      <input placeholder="New Score" onChange={(e) => setScore(e.target.value)}/>
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
}

export default UpdateScore;
