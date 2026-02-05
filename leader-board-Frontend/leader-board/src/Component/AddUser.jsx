import React,{useState} from 'react';
import {addUser} from '../Services/api.jsx';
function AddUser(){
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const handleSubmit=async()=>{
        await addUser(id,name);
        alert('User Added');
    }
    return (
        <div>
            <h3>Add User</h3>
            <input placeholder="ID" onChange={e=>setId(e.target.value)}/>
            <input placeholder="Name" onChange={e=>setName(e.target.value)}/>
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
}
export default AddUser;