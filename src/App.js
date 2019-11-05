import React, {useEffect, useState} from 'react';
import GridComponent from "./GridComponent/GridComponent";
import './App.css';
import PuzzleDockComponent from "./PuzzleDockComponent/PuzzleDockComponent";
// import AlertComponent from "./AlertComponent/AlertComponent";
// import TimerComponent from "./TimerComponent/TimerComponent";
import {MediaComponent} from "./MediaComponent/MediaComponent";

function App() {
    const puzzleDimension = 3;
    const elementRef = React.useRef(null);
    const [numberOfTiles, setNumberOfTiles] = useState(0);

    // const [counter, setCounter] = useState(0);

    useEffect(() => {
        setNumberOfTiles(elementRef.current.children[2].childElementCount);
    }, [numberOfTiles]);

    // useEffect(() => {
    //         const timerId = setInterval(() => {
    //             setCounter((prevState) => {
    //                 return prevState + 1
    //             })
    //         }, 1)
    //     }, [counter]);

    return (
      <div className="container" ref={elementRef}>
        <MediaComponent numberOfTiles={numberOfTiles}/>
        {/*<TimerComponent counter={counter}/>*/}
        <GridComponent puzzleDimension={puzzleDimension} setNumberOfTilesInDock={setNumberOfTiles} numberOfTiles={numberOfTiles}/>
        <PuzzleDockComponent puzzleDimension={puzzleDimension}/>
          {/*{ numberOfTiles === 8 ? <AlertComponent open={true} timerId={counter}/> : null}*/}
      </div>
  );
}

export default App;
