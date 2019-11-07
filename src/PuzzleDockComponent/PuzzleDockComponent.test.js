import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import PuzzleDockComponent from "./PuzzleDockComponent";

configure({adapter: new Adapter()});

describe('Puzzle Dock Component Component', () => {
    test('should create PuzzleDockComponent div', () => {
        const wrapper = mount(<PuzzleDockComponent newGame={true} puzzleDimension={3}/>);
        expect(wrapper.find('.MuiContainer-root').length).toEqual(1);
    });

    test('should create 9 tiles', () => {
        const wrapper = mount(<PuzzleDockComponent newGame={true} puzzleDimension={3}/>);
        expect(wrapper.find('.tile').length).toEqual(9);
    });

    test('should update component when new game is started', () => {
        const wrapper = shallow(<PuzzleDockComponent newGame={true} puzzleDimension={3}/>);
        const shouldUpdate = wrapper.instance().shouldComponentUpdate({newGame: false});
        expect(shouldUpdate).toBe(true)
    });

    test('should not update component when new game is not started', () => {
        const wrapper = shallow(<PuzzleDockComponent newGame={true} puzzleDimension={3}/>);
        const shouldUpdate = wrapper.instance().shouldComponentUpdate({newGame: true});
        expect(shouldUpdate).toBe(false)
    });
});
