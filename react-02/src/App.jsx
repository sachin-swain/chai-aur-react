// App.jsx
import { useState } from "react"

function App() {
  const [colour, setColour] = useState("green")

  return (
    <div className="w-full h-screen" style={{ backgroundColor: colour }}>
      {/* Optional button to test */}
      <button onClick={() => setColour("blue")} className="text-white p-4">
        Change Color
      </button>
    </div>
  )
}

export default App

