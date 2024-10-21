import { useEffect, useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);
    const handleAdd=()=>{
        const newTeam=team+1;
        setTeam(newTeam);
    }
    const handleRemove=()=>{
        const newTeam=team-1;
        setTeam(newTeam);
    }
    const teamStyle={
        border:'2px solid skyBlue',
        margin:'10px',
        padding:'10px',
        borderRadius:'10px'
    }
    const buttonStyle={
        marginLeft:'15px',
        padding:'10px 20px',
        borderRadius:'12px',
        backgroundColor:'#535bf2'
    }
    
    return(
        <div style={teamStyle}>
            <p >Players:{team}</p>
            <button style={buttonStyle} onClick={handleAdd}>Add</button>
            <button style={buttonStyle} onClick={handleRemove}>Remove</button>
        </div>
    )
}