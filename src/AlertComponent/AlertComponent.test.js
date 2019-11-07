import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import AlertComponent from "./AlertComponent";
import jest from 'jest-mock';

configure({adapter: new Adapter()});

describe('Alert Component', () => {
    test('should create AlertComponent', () => {
        const wrapper = shallow(<AlertComponent open={true}/>);
        expect(wrapper.find('.alarm-container').length).toEqual(1);
    });

    test('should stop counter', () => {
        const mockFn = jest.fn();
        mount(<AlertComponent open={true} handleCounterStop={mockFn} handleSaveScore={jest.fn()} handleNewGame={jest.fn()} setNumberOfTilesInDock={jest.fn()}/>);

        expect(mockFn).toHaveBeenCalled();
    });

    test('should save score', () => {
        const mockFn = jest.fn();
        mount(<AlertComponent open={true} handleCounterStop={jest.fn()} handleSaveScore={mockFn} handleNewGame={jest.fn()} setNumberOfTilesInDock={jest.fn()}/>);

        setTimeout(() => {
            expect(mockFn).toHaveBeenCalled();
        }, 5500);
    });

    test('should change game status', () => {
        const mockFn = jest.fn();
        mount(<AlertComponent open={true} handleCounterStop={jest.fn()} handleSaveScore={jest.fn()} handleNewGame={mockFn} setNumberOfTilesInDock={jest.fn()}/>);

        setTimeout(() => {
            expect(mockFn).toHaveBeenCalled();
        }, 5500);
    });

    test('should reset number of tiles in dock', () => {
        const mockFn = jest.fn();
        mount(<AlertComponent open={true} handleCounterStop={jest.fn()} handleSaveScore={jest.fn()} handleNewGame={jest.fn()} setNumberOfTilesInDock={mockFn}/>);

        setTimeout(() => {
            expect(mockFn).toHaveBeenCalled();
        }, 5500);
    });
});
