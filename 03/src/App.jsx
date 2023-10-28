import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Tailwind Test!
      </h1>
    <Card name="kailash" btntext="badavala →"></Card>
    <Card name="Ishaan"  btntext="chotavala →"></Card>
    </>
  
  )

}

export default App
