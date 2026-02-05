import React, { useState } from "react";
import { getRank } from "../Services/api.jsx";
function Rank(){
   const [id,setId]=useState("");
   const [rank,setRank]=useState("");
   const handleSubmit=async ()=>{
    const res = await getRank(id);
    setRank(res.data);
   }
   return (
    <div>
        <h3>Get The Rank Of User By their Id</h3>
        <input placeholder="Id" onChange={(e=>setId(e.target.value))}/>
        <button onClick={handleSubmit}>GetRank</button>
        {rank==-1 && <p>Not exist</p>}
        {rank!=-1 && <p>Rank: {rank}</p>}
    </div>
   );
}
export default Rank;