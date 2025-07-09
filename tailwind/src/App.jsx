import { useState } from 'react'
import './App.css'


// online requires unexecuted function
// onclick(setColour("red")) gives executed setColour funtion but need unexecuted it will execute when clicked


function App() {
  const [colour, setColour] = useState("black")

  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor : colour}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-2xl '>
          <button className='outline-none px-4 py-1 text-white shadow-xl rounded-3xl  shadow-slate-600'  
          style={{
            backgroundColor:"red"
          }} onClick={()=>setColour("red")}>Red</button>

          <button className='outline-none px-4 py-1 text-white shadow-xl rounded-3xl  shadow-slate-600'  
          style={{
            backgroundColor:"yellow"
          }} onClick={()=>setColour("yellow")}>yellow</button>

          <button className='outline-none px-4 py-1 text-white shadow-xl rounded-3xl  shadow-slate-600'  
          style={{
            backgroundColor:"blue"
          }}  onClick={()=>setColour("blue")}>blue</button>


          <button className='outline-none px-4 py-1 text-white shadow-xl rounded-3xl  shadow-slate-600'  
          style={{
            backgroundColor:"indigo"
          }}  onClick={()=>setColour("indigo")}>indigo</button>


          <button className='outline-none px-4 py-1 text-white shadow-xl rounded-3xl  shadow-slate-600'  
          style={{
            backgroundColor:"pink"
          }} onClick={()=>setColour("pink")}>pink</button>


          <button className='outline-none px-4 py-1 text-white shadow-xl rounded-3xl  shadow-slate-600'  
          style={{
            backgroundColor:"orange"
          }} onClick={()=>setColour("orange")}>orange</button>


          <button className='outline-none px-4 py-1 text-white shadow-xl rounded-3xl  shadow-slate-600'  
          style={{
            backgroundColor:"violet"
          }}  onClick={()=>setColour("violet")}>violet</button>


          <button className='outline-none px-4 py-1 text-white shadow-xl rounded-3xl  shadow-slate-600'  
          style={{
            backgroundColor:"black"
          }}  onClick={()=>setColour("black")}>black</button>

          <button className='outline-none px-4 py-1 text-white shadow-xl rounded-3xl  shadow-slate-600'  
          style={{
            backgroundColor:"green"
          }}  onClick={()=>setColour("green")}>green</button>

          <button className='outline-none px-4 py-1 text-white shadow-xl rounded-3xl  shadow-slate-600'  
          style={{
            backgroundColor:"lime"
          }}  onClick={()=>setColour("lime")}>lime</button>

          <button className='outline-none px-4 py-1 text-white shadow-xl rounded-3xl  shadow-slate-600'  
          style={{
            backgroundColor:"purple"
          }}  onClick={()=>setColour("purple")}>purple</button>

          
        </div>
      </div>
    </div>

    </>
  )
}

export default App
