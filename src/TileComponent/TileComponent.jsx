import React from 'react';
import './TileComponent.css';

const TileComponent = (props) => {

    const handleDragStart = (e) => {
        props.handleCounterStart();
        const target = e.target;
        e.dataTransfer.setData('tileId', target.id);
    };

    const handleDragOver = (e) => {
        e.stopPropagation();
    };

    const divStyle = {
        backgroundPositionX: `-${props.x}px`,
        backgroundPositionY: `-${props.y}px`,
        zIndex: props.id * Math.floor(Math.random() * 1000),
        left: Math.floor(Math.random() * 650),
        top: Math.floor(Math.random() * 200)
        // left: props.id % 2 === 0 ? 300 : props.id % 3 === 0 ? 500 : props.id % 5 === 0 ? 600 : 100,
        // top: props.id % 2 === 0 ? 40 : props.id % 3 === 0 ? 80 : props.id % 5 === 0 ? 140 : 110
    };

    return (
        <div
            id={props.id}
            className="tile"
            draggable={true}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            style={divStyle}>
        </div>
    )
};

export default TileComponent;