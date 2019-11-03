import React from "react";
import { Grid } from '@material-ui/core'

const GridItemComponent = (props) => {

    const handleDrop = (e, tileId) => {
        e.preventDefault();
        const tileCoordinance = e.dataTransfer.getData('tileId');
        const tile = document.getElementById(tileCoordinance);
        // debugger;
        if (tileCoordinance === tileId.toString()) {
            e.target.appendChild(tile);
            tile.className = 'tile-no-border';
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