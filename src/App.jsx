import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from '../Team'
import Users from './Users'
import Friends from './friends'



function App() {
  
  const handleClick=()=>{
    alert('Button clicked')
  }

  return (
    <>
      <h3>Rect core concepts part-2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      
      
      <button  onClick={handleClick}>Click Me</button>
      <button onClick={()=>handleClick()}>Click Me3</button>
      <button onClick={()=>alert('Button two clicked')}>Click Me-2</button>     
    </>
  )
}

export default App
