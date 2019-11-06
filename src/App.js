import React from 'react';
import './App.css';
import GameContainer from "./GameContainer/GameContainer.jsx";

function App() {
    const puzzleDimension = 3;
    return (
        <GameContainer puzzleDimension={puzzleDimension}/>
  );
}

export default App;
