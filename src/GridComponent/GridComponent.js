import React from 'react';
import { Grid } from '@material-ui/core'
import './GridComponent.css'
import GridItemComponent from "../GridItemComponent/GridItemComponent";
import AlertComponent from "../AlertComponent/AlertComponent";

const GridComponent = (props) => {

    return (
        <Grid container
              spacing={0}
              direction="row"
              justify="center"
              alignItems="center">
            {[...Array(props.puzzleDimension * props.puzzleDimension)]
                .map((e, i) => {
                    return (<GridItemComponent key={i} id={i} setNumberOfTilesInDock={props.setNumberOfTilesInDock} numberOfTiles={props.numberOfTiles}/>)
                })
            }
            { props.numberOfTiles === 8 ? <AlertComponent open={true}/> : null}
        </Grid>
    )
};

export default GridComponent