import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const myObj = [
    {
      userName: "Priya",
      btnText: "visit me"
    },
    {
      userName: "Mahima",
      btnText: "visit me"
    },
  ];

  let myArr = [28, 30];

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card user={myObj[0]} age={myArr[0]}/>
      <Card user={myObj[1]} age={myArr[1]}/>
    </>
  )
}

export default App
