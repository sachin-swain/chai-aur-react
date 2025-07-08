import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-0'></div>
      <div className='display-flex'>
         <div  className='bg-white width-50vw'></div>
      </div>
    </>
  )
}

export default App
