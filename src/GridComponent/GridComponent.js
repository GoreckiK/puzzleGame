import React from 'react';
// import { Grid } from '@materi'
import { Grid } from '@material-ui/core'
// import TileComponent from "../TileComponent/TileComponent";
import './GridComponent.css'
import GridItemComponent from "../GridItemComponent/GridItemComponent";
// import { borders } from '@material-ui/systeme'
// import { FormRow } from '@mate'
// import { Container, Row, Col } from 'react-grid';
// function handleDrop(event) {
//     console.log(event);
// }

// function handleDragOver(event) {
//     event.stopPropagation();
//     event.preventDefault();
// }

const GridComponent = (props) => {
    // constructor(
    //     this.props = props
    // );

    // const handleDrop = (e, tileId) => {
    //     e.preventDefault();
    //     const tileCoordinance = e.dataTransfer.getData('tileId');
    //     const tile = document.getElementById(tileCoordinance);
    //     // debugger;
    //     if (tileCoordinance === tileId) {
    //         e.target.appendChild(tile);
    //         tile.className = 'tile-no-border';
    //     }
    // };
    //
    // const handleDragOver = (e) => {
    //     e.preventDefault();
    // };

    // const puzzleDimension = 3;

    // const gridItems = () => {
    //     // debugger;
    //     // for ( let i=0; i < 9; i++ ) {
    //     //     (<GridItemComponent id ={i}/>)
    //     // }
    // };

    return (
        <Grid container
              spacing={0}
              direction="row"
              justify="center"
              alignItems="center">
            {[...Array(props.puzzleDimension * props.puzzleDimension)]
                .map((e, i) => {
                    return (<GridItemComponent key={i} id={i}/>)
                })
            }
        </Grid>
    )
};

export default GridComponent