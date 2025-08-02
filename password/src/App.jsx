import './App.css'
import { useState, useCallback, useEffect ,useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const refer = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      str += "0123456789";
    }
    if (character) {
      str += "@#$^&*{}:;?/|`~!-_+*._";
    }

    for (let i = 1; i <= length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length));
      pass += char;
    }

    setPassword(pass);
  }, [length, number, character , setPassword]);

  useEffect(() => {
    passwordGenerator(); 
  }, [length, number, character, passwordGenerator]);

  const copyPassword =useCallback(() =>{
    // refer.current?.select();
    // refer.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className="w-full h-screen bg-black flex flex-col gap-6 justify-center items-center">
      <h1 className="text-3xl font-extrabold text-center text-white">
        PASSWORD GENERATOR
      </h1>

      <div className="w-[600px] bg-cyan-200 min-h-[300px] rounded-2xl p-4 shadow-xl shadow-gray-500/50 flex justify-center items-center flex-col gap-6">

        <div className="w-full flex gap-2 items-center">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="bg-cyan-900 text-amber-100 w-full p-2 rounded-md"
            readOnly
            ref={refer}
          />
          <button
            // onClick={() => navigator.clipboard.writeText(password)}
            onClick={copyPassword}
            className="bg-cyan-800 text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-4 flex-wrap">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={number}
              id="numberInput"
              onChange={() => setNumber((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={character}
              id="characterInput"
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>

        <button
          onClick={passwordGenerator}/*  */
          className="mt-2  bg-cyan-800 text-white px-6 py-2 rounded-md hover:bg-cyan-700 transition"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;