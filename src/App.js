import logo from './logo.svg';
import './App.css';
import React from "react"
import { Slider } from '@mui/material';
import { useState, useEffect, useRef } from 'react';


function App() {

  const [value, setValue] = useState(1945)
  const weird = useRef(Math.floor(Math.random() * (1942 - 1940 + 1)) + 1940)
  const random = Math.floor(Math.random() * (1942 - 1940 + 1)) + 1940;
  

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
  min={1945}
  max={2023}
  valueLabelDisplay="off"
/>
</div>
<div className='guess-button'>
  <h2>GUESS</h2>
</div>
      
      </div>
      
    </div>
  );
}

export default App;
