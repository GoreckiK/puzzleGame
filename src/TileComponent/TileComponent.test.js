import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import TileComponent from "./TileComponent";
import jest from 'jest-mock';

configure({adapter: new Adapter()});

describe('Tile Component', () => {

    test('should create tile div', () => {
        const wrapper = shallow(<TileComponent/>);
        expect(wrapper.hasClass('tile')).toBeTruthy();
    });

    test('should call e.stopPropagation onDragOver', () => {
        const mockFn = jest.fn();
        const wrapper = mount(<TileComponent id={1}/>);

        wrapper.find('.tile').simulate('dragover', {
            target: {
                id: 1
            },
            dataTransfer: { setData: jest.fn()},
            stopPropagation: mockFn
        });

        expect(mockFn).toHaveBeenCalled();
    });

    test('should start counter from props', () => {
        const wrapper = mount(<TileComponent id={1}/>);
        wrapper.setProps({
            handleCounterStart: jest.fn()
        });
        wrapper.find('.tile').simulate('dragstart', {
            target: {
                id: 1
            },
            dataTransfer: { setData: jest.fn()}
        });
        expect(wrapper.props().handleCounterStart).toHaveBeenCalled()
    });

    test('should set data to pass ', () => {
        const mockFn = jest.fn();
        const wrapper = mount(<TileComponent id={1}/>);
        wrapper.setProps({
            handleCounterStart: jest.fn()
        });
        wrapper.find('.tile').simulate('dragstart', {
            target: {
                id: 1
            },
            dataTransfer: { setData: mockFn}
        });

        expect(mockFn).toHaveBeenCalledWith("tileId", 1);
    });

    test('should set background img position to passed values', () => {
        const wrapper = mount(<TileComponent id={1}/>);
        wrapper.setProps({
            handleCounterStart: jest.fn(),
            x: 50,
            y: 60
        });
        let style = wrapper.find('.tile').get(0).props.style;
        expect(style.backgroundPositionX).toEqual('-50px');
        expect(style.backgroundPositionY).toEqual('-60px');
    })
});
