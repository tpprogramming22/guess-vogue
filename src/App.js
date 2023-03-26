import logo from './logo.svg';
import './App.css';
import React from "react"
import { Slider } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import guessValue from './components/guessValue';

function App() {

  const [value, setValue] = useState(1945)
  const [solution, setSolution] = useState(null)

  const weird = useRef(Math.floor(Math.random() * (1977 - 1977 + 1)) + 1977)

  console.log(weird)

  

  // useEffect(() => {
    
  // }, []);

  const selection = "REACT_APP_" + weird.current
  

  //slight difference bosh

  return (
    <div className="main-title">
      <h1>
        Guess The Vogue
      </h1>
      <p>Can you guess what year this issue was published?</p>
      
      <div className="image-container">
      <img src={process.env[selection]}/>
      </div>
      <div>
        <p>{value}</p>
        <div>
          <Slider
  aria-label="Small steps"
  defaultValue={1983}
  getAriaValueText={setValue}
  step={1}
  marks
  min={1939}
  max={2023}
  valueLabelDisplay="off"
/>
</div>
<div >
  <button className='guess-button' onClick={()=>{setSolution(guessValue(value, weird.current))}}>GUESS</button>
  {solution == 0 &&
  <h2>False!</h2>}
  {solution == 1 &&
  <h2>Correct!</h2>}
</div>
      
      </div>
      
    </div>
  );
}

export default App;
