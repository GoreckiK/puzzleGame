import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import GridComponent from "./GridComponent";

configure({adapter: new Adapter()});

describe('Grid Component', () => {
    test('should create Grid div', () => {
        const wrapper = mount(<GridComponent puzzleDimension={3}/>);
        expect(wrapper.find('.MuiGrid-container').length).toEqual(1);
    });

    test('should create 9 Grid Items', () => {
        const wrapper = mount(<GridComponent puzzleDimension={3}/>);
        expect(wrapper.find('.MuiGrid-item').length).toEqual(9);
    });
});
