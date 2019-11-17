import React  from 'react';
import './App.css';
import GameContainer from "./GameContainer/GameContainer.jsx";
// import { MyProvider } from "./MyProvider/MyProvider";

function App() {
    return (
        <GameContainer puzzleDimension={3}/>
  );
}

export default App;
