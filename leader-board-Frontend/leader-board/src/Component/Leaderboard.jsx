import React, { useState } from "react";
import { getTopK } from "../Services/api.jsx";
function Leaderboard(){
    const [k,setK]=useState("");
    const [users,setUsers]=useState([]);
    const handleSubmit=async ()=>{
        const res= await getTopK(k);
        setUsers(res.data);
    }
    return (
        <div>
            <h3>Get Top K Users Based on their Score</h3>
            <input placeholder="Give the value of K" onChange={e=>setK(e.target.value)}/>
            <button onClick={handleSubmit}>Fetch</button>
        <ul>
            {users.map(u => (
          <li key={u.id}>
            {u.name} - {u.score}
          </li>
        ))}
        </ul>
        </div>   
    )
}
export default Leaderboard;