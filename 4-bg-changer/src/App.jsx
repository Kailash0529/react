import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("violet")

  return (
    <>
    
  <div className='w-screen h-screen duration-200' style={{backgroundColor:color}}>
  <div className='bottom-12 flex justify-center fixed flex-wrap inset-x-0x px-2 ml-96'>
  <div className='felx flex-wrap shadow-lg gap-4 justify-center bg-white px-3 py-2 rounded-3xl'>
  <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>red</button>
  <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
  <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
  </div>
  </div>
  </div>
  
  </>
  )
}

export default App
