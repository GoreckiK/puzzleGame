// import React, {useEffect, useRef, useState} from "react";
// import TimerComponent from "../TimerComponent/TimerComponent";
// import AlertComponent from "../AlertComponent/AlertComponent";
// import './MediaComponent.css'
//
// export function MediaComponent(props) {
//     const [counter, setCounter] = useState(0);
//     const [delay, setDelay] = useState(1000);
//     const [isRunning, setIsRunning] = useState(true);
//     const setToFalse = setIsRunning(false);
//     //
//     // const timerId = setInterval(() => {
//     //     if (!isFinished)  {
//     //         setCounter((prevState) => {
//     //             return prevState + 1
//     //         })
//     //     }
//     //
//     // }, 1);
//     useInterval(() => {
//         // Your custom logic here
//         setCounter(counter + 1);
//     }, isRunning ? delay : null);
//     // const clear = () => {
//     //     debugger
//     //     clearInterval(timerId)
//     //     setFinished(true)
//     // }
//     // useEffect(() => {
//     //     const timerId = setInterval(() => {
//     //         setCounter((prevState) => {
//     //             return prevState + 1
//     //         })
//     //     }, 1)
//     // }, [counter]);
//
//     function useInterval(callback, delay) {
//         const savedCallback = useRef();
//
//         // Remember the latest function.
//         useEffect(() => {
//             savedCallback.current = callback;
//         }, [callback]);
//
//         // Set up the interval.
//         useEffect(() => {
//             function tick() {
//                 savedCallback.current();
//             }
//             if (isRunning === true) {
//                 let id = setInterval(tick, delay);
//                 return () => clearInterval(id);
//             }
//         }, [delay]);
//     }
//
//     return (
//         <div className="media-container">
//             <TimerComponent counter={counter} />
//             { props.numberOfTiles === 8 ? <AlertComponent open={true} setToFalse={setToFalse}/> : null}
//         </div>
//     )
// }
