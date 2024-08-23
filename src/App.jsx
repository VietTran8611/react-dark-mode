import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DarkMode } from './DarkMode/DarkMode'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <DarkMode />
      <h1>text</h1>
      <div className='box primary'>--clr--primary</div>
      <div className='box secondary'>--clr--secondary</div>
      <div className='box accent'>--clr--accent</div>

    </>
  )
}

export default App
