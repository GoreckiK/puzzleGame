import React, {useEffect, useState} from 'react';
import GridComponent from "./GridComponent/GridComponent";
import './App.css';
import PuzzleDockComponent from "./PuzzleDockComponent/PuzzleDockComponent";
import AlertComponent from "./AlertComponent/AlertComponent";
import TimerComponent from "./TimerComponent/TimerComponent";

function App() {
    const puzzleDimension = 3;
    const elementRef = React.useRef(null);
    const [numberOfTiles, setNumberOfTiles] = useState(0);
    const [counter, setCounter] = useState(0);

    // const [timerId, setTimerId] = useState(0);
    // const timerId = setInterval(() => {
    //         setCounter((prevState) => {
    //             return prevState + 1
    //         })
    //     }, 1000);
    useEffect(() => {
        setNumberOfTiles(elementRef.current.children[2].childElementCount);
    }, [numberOfTiles]);

    return (
      <div className="container" ref={elementRef}>
        <TimerComponent counter={counter}/>
        <GridComponent puzzleDimension={puzzleDimension} setNumberOfTilesInDock={setNumberOfTiles} numberOfTiles={numberOfTiles}/>
        <PuzzleDockComponent puzzleDimension={puzzleDimension}/>
          {/*{ numberOfTiles === 8 ? <AlertComponent open={true} timerId={timerId}/> : null}*/}
      </div>
  );
}

export default App;
