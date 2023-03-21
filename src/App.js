import logo from './logo.svg';
import './App.css';


function App() {

  const random = Math.floor(Math.random() * (1942 - 1940 + 1)) + 1940;

  const selection = "REACT_APP_" + random

  console.log(selection)

  return (
    <div className="main-title">
      <h1>
        Guess The Vogue
      </h1>
      <p>Can you guess what year this issue was published?</p>
      <div className="image-container">
      <img src={process.env[selection]}/>
      </div>
      
    </div>
  );
}

export default App;
