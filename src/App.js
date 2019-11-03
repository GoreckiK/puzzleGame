import React from 'react';
// import logo from './logo.svg';
import GridComponent from "./GridComponent/GridComponent";
import './App.css';
import PuzzleDockComponent from "./PuzzleDockComponent/PuzzleDockComponent";

function App() {
    const puzzleDimension = 3;

    return (
      <div className="container">
        <GridComponent puzzleDimension={puzzleDimension}/>
        <PuzzleDockComponent puzzleDimension={puzzleDimension}/>
      </div>

  );
}

export default App;
