import React, {useState, useEffect} from "react";
import './TimerComponent.css'

const TimerComponent = (props) => {
    const [counter, setCounter] = useState(0);
    // function increment() {
    //     setCounter((prevState) => {
    //         return prevState + 1
    //     });
    // }
    //
    // const runCounter = setInterval(increment, 1000);

    useEffect(() => {
        // in useEffect, second argument e.g. [] is equiwalent to componentDidMount, without second argument - componentDidUpdate. You can also return some code which will be equivalent to componentWillUnmount
        function increment() {
            setCounter((prevState) => {
                return prevState + 1
            });
        }
        const timer = setInterval(increment, 1000);
        console.log(timer)
    }, []);

    const handleClick = () => {
        debugger;
        window.clearInterval();
    };

    return (
        <div>
            <button onClick={handleClick}>CLick</button>
            <div className="clock">
                {counter}
            </div>
        </div>

    )
};

export default TimerComponent