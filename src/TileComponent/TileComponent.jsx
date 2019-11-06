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