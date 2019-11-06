import React, {createRef} from "react";
import TileComponent from "../TileComponent/TileComponent";
import Container from "@material-ui/core/Container";
import './AlternativePuzzleDockComponent.css'

export default class AlternativePuzzleDockComponent extends React.Component {
    constructor(props) {
        super(props);
        this.imgWidth = 1000;
        this.imgHeight = 1000;
        this.tiles = createRef();
        this.state = {
            tilesIds: ['0', '1', '2', '3', '4', '5', '6', '7', '8']
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setState(() => {
            return this.state.tilesIds.map(tileId => {
                let childNode = document.getElementById(tileId);
                this.tiles.current.appendChild(childNode);
                return childNode.className = 'tile';
            })
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.newGame !== nextProps.newGame;
    }

    render() {
        return (
            <Container maxWidth={false} ref={this.tiles}>
                {[...Array(this.props.puzzleDimension * this.props.puzzleDimension)]
                    .map((e, i) => {
                        return (
                            <TileComponent
                                key={i}
                                id={i}
                                x={(i % this.props.puzzleDimension) * this.imgWidth / this.props.puzzleDimension}
                                y={Math.floor(i / this.props.puzzleDimension) * this.imgHeight / this.props.puzzleDimension}
                                handleCounterStart={this.props.handleCounterStart}
                            />
                        )
                    })
                }
            </Container>
        )
    }
}