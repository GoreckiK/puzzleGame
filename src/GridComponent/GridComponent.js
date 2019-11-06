import React from 'react';
import { Grid } from '@material-ui/core'
import './GridComponent.css'
import GridItemComponent from "../GridItemComponent/GridItemComponent";

const GridComponent = (props) => {
    return (
        <Grid container
              spacing={0}
              direction="row"
              justify="center"
              alignItems="center"
        >
            {[...Array(props.puzzleDimension * props.puzzleDimension)]
                .map((e, i) => {
                    return (
                        <GridItemComponent
                            key={i}
                            id={i}
                            setNumberOfTilesInDock={props.setNumberOfTilesInDock}
                            numberOfTilesInDock={props.numberOfTilesInDock}
                            handlePenalty={props.handlePenalty}/>)
                })
            }
        </Grid>
    )
};

export default GridComponent