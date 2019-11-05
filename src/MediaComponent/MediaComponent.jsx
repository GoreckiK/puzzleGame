import React, {useEffect, useRef, useState} from "react";
import TimerComponent from "../TimerComponent/TimerComponent";
import AlertComponent from "../AlertComponent/AlertComponent";
import './MediaComponent.css'

export function MediaComponent(props) {
    const [counter, setCounter] = useState(0);
    const [isFinished, setFinished] = useState(false);
    //
    // const timerId = setInterval(() => {
    //     if (!isFinished)  {
    //         setCounter((prevState) => {
    //             return prevState + 1
    //         })
    //     }
    //
    // }, 1);

    // const clear = () => {
    //     debugger
    //     clearInterval(timerId)
    //     setFinished(true)
    // }
    // useEffect(() => {
    //     const timerId = setInterval(() => {
    //         setCounter((prevState) => {
    //             return prevState + 1
    //         })
    //     }, 1)
    // }, [counter]);

    return (
        <div className="media-container">
            <TimerComponent counter={counter} />
            { props.numberOfTiles === 8 ? <AlertComponent open={true} /> : null}
        </div>
    )
}
