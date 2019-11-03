import React, {useEffect} from "react";
import './PuzzleDockComponent.css';
import TileComponent from "../TileComponent/TileComponent";
import Container from "@material-ui/core/Container/Container";

const PuzzleDockComponent = (props) => {
    const puzzleDimension = props.puzzleDimension;
    const imgWidth = 1000;
    const imgHeight = 1000;

    useEffect(() => {
        const img = new Image();
        img.src = '../colibra-logo.png';
        img.onload = () => {
            console.log('dupa2');

            console.log(img.width, img.height)
        };
        // debugger
    });

    return (
        <Container maxWidth={false}>
            {[...Array(puzzleDimension * puzzleDimension)]
                .map((e, i) => {
                    return (
                        <TileComponent
                        key={i}
                        id={i}
                        x={(i % puzzleDimension) * imgWidth / puzzleDimension}
                        y={Math.floor(i / puzzleDimension) * imgHeight / puzzleDimension}/>
                    )
                })
            }
        </Container>
    )
};

export default PuzzleDockComponent