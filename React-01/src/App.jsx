import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [prp, updateFunction] = useState(0);

  const addValue = () => {
    updateFunction(prev => (prev < 20 ? prev + 1 : prev));
  };

  const removeValue = () => {
    updateFunction(prev => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <>
      <h1>Chai aur code</h1>
      <h3>No. of click : {prp}</h3>
      <button onClick={addValue}>Add Click {prp}</button>
      <button onClick={removeValue}>Remove Click {prp}</button>
    </>
  );
}

export default App


// You can update state in two ways:

// Direct value: updateFunction(5);
// Functional updater: updateFunction(prev => prev + 1);
// When you use the functional updater, React itself will call your function and pass the latest value of prp as the argument (prev).



