import React from "react";
import TimerComponent from "../TimerComponent/TimerComponent";
import AlertComponent from "../AlertComponent/AlertComponent";
import './AlternativeMediaComponent.css'
import AlternativePuzzleDockComponent from "../AlternativePuzzleDockComponent/AlternativePuzzleDockComponent";
import GridComponent from "../GridComponent/GridComponent";

export default class AlternativeMediaComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            isRunning: false,
            timeoutId: null,
            newGame: true,
            numberOfTilesInDock: 0
        };
        this.handleCounterStop = this.handleCounterStop.bind(this);
        this.handleCounterStart = this.handleCounterStart.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
        this.handleNumberOfTilesInDockChange = this.handleNumberOfTilesInDockChange.bind(this);
        this.handlePenalty = this.handlePenalty.bind(this);
        this.puzzleDock = React.createRef();
    }

    handleCounterStop() {
        this.setState({
            isRunning: false
        });
    }

    handleCounterStart() {
        this.setState({
            isRunning: true
        })
    }

    handleNewGame() {
        this.setState({
            newGame: !this.state.newGame
        });

        this.setState({
            counter: 0
        })
    }

    handleNumberOfTilesInDockChange(newValue) {
        this.setState({
            numberOfTilesInDock: newValue
        })
    }

    handlePenalty() {
        this.setState({
            counter: this.state.counter + 5
        })
    }
    componentDidMount() {
        this.setState({
            numberOfTilesInDock: this.puzzleDock.current.children[1].childElementCount
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isRunning !== this.state.isRunning && this.state.isRunning === true) {
            let id = setInterval(() => {
                this.setState({counter: this.state.counter + 1})
            }, 1);

            this.setState({
                timeoutId: id
            })
        }

        if (!this.state.isRunning) clearInterval(this.state.timeoutId)
    }

    render() {
        return (
            <div className="alternative-media-container" ref={this.puzzleDock}>
                <TimerComponent counter={this.state.counter}/>
                <GridComponent puzzleDimension={this.props.puzzleDimension}
                               setNumberOfTilesInDock={this.handleNumberOfTilesInDockChange}
                               numberOfTilesInDock={this.state.numberOfTilesInDock}
                               handlePenalty={this.handlePenalty}
                               newGame={this.state.newGame}
                />
                <AlternativePuzzleDockComponent puzzleDimension={this.props.puzzleDimension}
                                                handleCounterStart={this.handleCounterStart}
                                                isRunning={this.state.isRunning}
                                                newGame={this.state.newGame}/>
                { this.state.numberOfTilesInDock === 0 ?
                    <AlertComponent open={true}
                                    handleCounterStop={this.handleCounterStop}
                                    handleNewGame={this.handleNewGame}
                                    setNumberOfTilesInDock={this.handleNumberOfTilesInDockChange}
                    />
                    : null
                }
            </div>
        )
    }
}
