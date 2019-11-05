import React from "react";
import './TimerComponent.css'

const TimerComponent = (props) => {
    return (
        <div className="clock">
            {props.counter}
        </div>
    )
};

export default TimerComponent