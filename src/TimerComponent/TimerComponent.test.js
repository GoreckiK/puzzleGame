import React from "react";
import TimerComponent from "./TimerComponent";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';

configure({adapter: new Adapter()});

describe('Timer Component', () => {
    test('should create clock div', () => {
        const wrapper = shallow(<TimerComponent/>);
        expect(wrapper.hasClass('clock')).toBeTruthy();
    });

    test('should should have counter value set to 0', () => {
        const wrapper = mount(<TimerComponent/>);
        wrapper.setProps({ counter: 1});
        expect(wrapper.props().counter).toEqual(1)
    });
});
