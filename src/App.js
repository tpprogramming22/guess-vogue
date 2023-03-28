import logo from './logo.svg';
import './App.css';
import React from "react"
import { Slider } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import guessValue from './components/guessValue';
import { createTheme } from '@mui/material/styles';
import { TiTick, TiTimes } from 'react-icons/ti'

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function App() {

  const [value, setValue] = useState(1945)
  const [solution, setSolution] = useState(null)

  const weird = useRef(Math.floor(Math.random() * (1977 - 1977 + 1)) + 1977)

  console.log(weird)

  

  useEffect(() => {
    setSolution(2)
    
  }, [value]);

  const selection = "REACT_APP_" + weird.current
  

  //slight difference bosh

  return (
    <div>
    <div className="main-title">
      <h1>
        Guess The Vogue
      </h1>
      <p>Can you guess what year this issue was published?</p>
      
      <div className="image-container">
      <img src={process.env[selection]}/>
      </div>
      {solution == 0 &&
      <div className='center'>
  <TiTimes className='absolute-header'/> </div>
  }
  
  {solution == 1 &&
  <div className='center'>
  <TiTick className='absolute-header'/> </div>}
      <div>
        <p className='no-pointer'>{value}</p>
        <div>
        
          <Slider
  defaultValue={1983}
  getAriaValueText={setValue}
  step={1}
  marks
  min={1939}
  max={2023}
  valueLabelDisplay="off"
  color="primary"
/>
</div>
<div >
  <div className='guess-button' onClick={()=>{setSolution(guessValue(value, weird.current))}}>
    <h2>GUESS</h2>
  </div>
  
</div>
      
      </div>
      
    </div>
    </div>
  );
}

export default App;
