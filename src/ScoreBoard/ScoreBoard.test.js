import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import ScoreBoard from "./ScoreBoard";

configure({adapter: new Adapter()});

describe('ScoreBoard Component', () => {
    test('should create ScoreBoard div', () => {
        const wrapper = shallow(<ScoreBoard savedScores={[]}/>);
        expect(wrapper.hasClass('scoreboard')).toBeTruthy();
    });

    test('should create cell GameId', () => {
        const wrapper = mount(<ScoreBoard savedScores={[]}/>);
        expect(wrapper.find('th').get(0).props.children).toEqual('Game Id')
    });

    test('should create cell Score [ms]', () => {
        const wrapper = mount(<ScoreBoard savedScores={[]}/>);
        expect(wrapper.find('th').get(1).props.children).toEqual('Score [ms]')
    });

    test('should create score when in scoreboard when shore is provided', () => {
        const wrapper = mount(<ScoreBoard savedScores={[2569]}/>);
        expect(wrapper.find('th').length).toEqual(4)
    });
});
