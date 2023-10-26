import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  function addcount()
  {
    setCount(count+1);
  }
  function subcount()
  {
    setCount(count-1);
  }
  
  return (
    
    
    <div>

      <h1>here's the counter</h1>
      <h1>Counter value:{count}</h1>
      <button onClick={addcount}>Add</button><br />
      <button onClick={subcount}>Subtract</button>

    </div>
     
  )
}

export default App
