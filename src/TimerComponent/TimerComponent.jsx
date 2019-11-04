import React, {useEffect, useState} from "react";
import './TimerComponent.css'

const TimerComponent = (props) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCounter((prevState) => {
                return prevState + 1
            })
        }, 1)
        props.setTimerId(() => {

        });
    }, [counter]);

    return (
        <div className="clock">
            {counter}
        </div>
    )
};

export default TimerComponent