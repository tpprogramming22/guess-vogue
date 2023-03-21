import logo from './logo.svg';
import './App.css';
import React from "react"
import { Slider } from '@mui/material';

function App() {

  const random = Math.floor(Math.random() * (1942 - 1940 + 1)) + 1940;

  const selection = "REACT_APP_" + random

  console.log(selection)

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
      <Slider
  aria-label="Small steps"
  defaultValue={1983}
  step={1}
  marks
  min={1945}
  max={2023}
  valueLabelDisplay="auto"
/>
      </div>
      
    </div>
  );
}

export default App;
