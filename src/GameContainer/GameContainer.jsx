import React from "react";
import TimerComponent from "../TimerComponent/TimerComponent";
import AlertComponent from "../AlertComponent/AlertComponent";
import './GameContainer.css'
import PuzzleDockComponent from "../PuzzleDockComponent/PuzzleDockComponent";
import GridComponent from "../GridComponent/GridComponent";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

export default class GameContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            isRunning: false,
            timeoutId: null,
            newGame: true,
            numberOfTilesInDock: 0,
            savedScores: []
        };
        this.handleCounterStop = this.handleCounterStop.bind(this);
        this.handleCounterStart = this.handleCounterStart.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
        this.handleNumberOfTilesInDockChange = this.handleNumberOfTilesInDockChange.bind(this);
        this.handlePenalty = this.handlePenalty.bind(this);
        this.handleSaveScore = this.handleSaveScore.bind(this);
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
            counter: this.state.counter + 5000
        })
    }

    handleSaveScore() {
        this.setState( {
            savedScores: [...this.state.savedScores, this.state.counter]
        })
    }

    componentDidMount() {
        this.setState({
            numberOfTilesInDock: this.puzzleDock.current && this.puzzleDock.current.children[2].childElementCount
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isRunning !== this.state.isRunning && this.state.isRunning === true) {
            let id = setInterval(() => {
                this.setState({counter: this.state.counter + 10})
            }, 10);

            this.setState({
                timeoutId: id
            })
        }

        if (!this.state.isRunning) clearInterval(this.state.timeoutId)
    }

    render() {
        return (
            <div className="game-container">
                <ScoreBoard savedScores={this.state.savedScores}/>
                <div className="media-container" ref={this.puzzleDock}>
                    <TimerComponent counter={this.state.counter}/>
                    <GridComponent puzzleDimension={this.props.puzzleDimension}
                                   setNumberOfTilesInDock={this.handleNumberOfTilesInDockChange}
                                   numberOfTilesInDock={this.state.numberOfTilesInDock}
                                   handlePenalty={this.handlePenalty}
                                   newGame={this.state.newGame}
                    />
                    <PuzzleDockComponent puzzleDimension={this.props.puzzleDimension}
                                         handleCounterStart={this.handleCounterStart}
                                         isRunning={this.state.isRunning}
                                         newGame={this.state.newGame}/>
                    {this.state.numberOfTilesInDock === 0 ?
                        <AlertComponent open={true}
                                        handleCounterStop={this.handleCounterStop}
                                        handleNewGame={this.handleNewGame}
                                        setNumberOfTilesInDock={this.handleNumberOfTilesInDockChange}
                                        handleSaveScore={this.handleSaveScore}
                        />
                        : null
                    }
                </div>
            </div>
        )
    }
}
