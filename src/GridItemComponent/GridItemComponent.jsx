import React, {useContext} from "react";
import { Grid } from '@material-ui/core'
import {MyContext} from "../MyProvider/MyProvider";

const GridItemComponent = (props) => {
    const myContext = useContext(MyContext);

    const handleDrop = (e, tileId) => {
        e.preventDefault();
        const tileCoordinance = e.dataTransfer.getData('tileId');
        const tile = document.getElementById(tileCoordinance);
        if (tileCoordinance === tileId.toString()) {
            e.target.appendChild(tile);
            tile.className = 'tile-no-border';
            myContext.setNumberOfTilesInDock(myContext.numberOfTilesInDock - 1);
        }
        else {
            myContext.handlePenalty();
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <Grid item xs={4}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, props.id)}>
        </Grid>
    )
};

export default GridItemComponent