import React from "react";
import TimerComponent from "./TimerComponent";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('timerComponent', () => {
    test('should create clock div', () => {
        const counter = 0;
        const timerComponent = shallow(<TimerComponent counter={counter}/>);
        expect(timerComponent.find('div.clock').length).toEqual(1)
    });
});
