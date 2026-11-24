import { useState } from 'react'
import { useRef } from "react";
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Exercise1 from "./components/Exercise1/Exercise1";
import Exercise2 from "./components/Exercise2/Exercise2";
import Exercise3 from "./components/Exercise3/Exercise3";
import Exercise4 from "./components/Exercise4/Exercise4";
import Exercise5 from "./components/Exercise5/Exercise5";

function App() {
  return (
    <div>
      <h1>React Hooks Exercises</h1>

      <Exercise1 />
      <hr />

      <Exercise2 />
      <hr />

      <Exercise3 />
      <hr />

      <Exercise4 />
      <hr />

      <Exercise5 />
    </div>
  );
}

export default App;
