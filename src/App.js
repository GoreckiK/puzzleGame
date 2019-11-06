import React from 'react';
import './App.css';
import AlternativeMediaComponent from "./AlternativeMediaComponent/AlternativeMediaComponent";

function App() {
    const puzzleDimension = 3;
    return (
        <AlternativeMediaComponent puzzleDimension={puzzleDimension}/>
  );
}

export default App;
