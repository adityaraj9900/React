import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        style={{ backgroundColor: "blue" }}
        onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button
        type="button"
        style={{ backgroundColor: "red" }}
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        type="button"
        style={{ backgroundColor: "pink" }}
        onClick={() => setColor("pink")}
      >
        Pink
      </button>
      <button
        type="button"
        style={{ backgroundColor: "green" }}
        onClick={() => setColor("green")}
      >
        Green
      </button>
    </>
  );
}
export default App;

