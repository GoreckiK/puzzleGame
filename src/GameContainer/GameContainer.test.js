import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import GameContainer from "./GameContainer";

configure({adapter: new Adapter()});

describe('GameContainer Component', () => {
    test('should create GameContainer div', () => {
        const wrapper = shallow(<GameContainer puzzleDimension={3}/>);
        expect(wrapper.find('.game-container').length).toEqual(1);
    });

    test('should create Scoreboard', () => {
        const wrapper = mount(<GameContainer puzzleDimension={3}/>);
        expect(wrapper.find('.scoreboard').length).toEqual(1);
    });

    test('should create Timer', () => {
        const wrapper = mount(<GameContainer puzzleDimension={3}/>);
        expect(wrapper.find('.clock').length).toEqual(1);
    });

    test('should create Grid', () => {
        const wrapper = mount(<GameContainer puzzleDimension={3}/>);
        expect(wrapper.find('.MuiGrid-container').length).toEqual(1);
    });

    test('should create Dock', () => {
        const wrapper = mount(<GameContainer puzzleDimension={3}/>);
        expect(wrapper.find('.MuiContainer-root').length).toEqual(1);
    });

    test('should create Alarm when there are no tiles left in the dock', () => {
        const wrapper = mount(<GameContainer puzzleDimension={3} open={true}/>);
        wrapper.setState({numberOfTilesInDock: 0});
        expect(wrapper.find('.alarm-container').length).toEqual(1);
    });

    test('should not create Alarm when there are no tiles left in the dock', () => {
        const wrapper = mount(<GameContainer puzzleDimension={3}/>);
        expect(wrapper.find('.alarm-container').length).toEqual(0);
    });

    test('should set counter isRunning state to true', () => {
        const wrapper = shallow(<GameContainer puzzleDimension={3}/>);
        wrapper.instance().handleCounterStart();
        expect(wrapper.state().isRunning).toEqual(true);
    });

    test('should set counter isRunning state to false', () => {
        const wrapper = shallow(<GameContainer puzzleDimension={3}/>);
        wrapper.instance().handleCounterStop();
        expect(wrapper.state().isRunning).toEqual(false);
    });

    test('should set newGame state', () => {
        const wrapper = shallow(<GameContainer puzzleDimension={3}/>);
        wrapper.instance().handleNewGame();
        expect(wrapper.state().newGame).toEqual(false);
    });

    test('should update state with current value of tiles in the dock', () => {
        const wrapper = shallow(<GameContainer puzzleDimension={3}/>);
        wrapper.instance().handleNumberOfTilesInDockChange(5);
        expect(wrapper.state().numberOfTilesInDock).toEqual(5);
    });

    test('should add 5000ms to counter when tile is positioned incorrectly', () => {
        const wrapper = shallow(<GameContainer puzzleDimension={3}/>);
        wrapper.instance().handlePenalty();
        expect(wrapper.state().counter).toEqual(5000);
    });

    test('should save score to state', () => {
        const wrapper = shallow(<GameContainer puzzleDimension={3}/>);
        wrapper.instance().handleSaveScore();
        expect(wrapper.state().savedScores).toEqual([0]);
    });
});
