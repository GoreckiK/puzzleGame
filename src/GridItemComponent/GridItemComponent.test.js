import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import GridItemComponent from "./GridItemComponent";
import jest from 'jest-mock';

configure({adapter: new Adapter()});

describe('Grid Item Component', () => {
    test('should create GridItemComponent div', () => {
        const wrapper = mount(<GridItemComponent/>);
        expect(wrapper.find('.MuiGrid-root').length).toEqual(1);
    });

    test('should call e.stopPropagation onDragOver', () => {
        const mockFn = jest.fn();
        const wrapper = mount(<GridItemComponent/>);

        wrapper.find('.MuiGrid-root').simulate('dragover', {
            dataTransfer: { getData: jest.fn()},
            preventDefault: mockFn
        });

        expect(mockFn).toHaveBeenCalled();
    });

    test('should call e.stopPropagation onDrop', () => {
        const mockFn = jest.fn();
        const wrapper = mount(<GridItemComponent id={1} handlePenalty={jest.fn()}/>);

        wrapper.find('.MuiGrid-root').simulate('drop', {
            dataTransfer: { getData: jest.fn()},
            preventDefault: mockFn
        });

        expect(mockFn).toHaveBeenCalled();
    });

    test('should get tile id from event', () => {
        const mockFn = jest.fn();
        const wrapper = mount(<GridItemComponent id={1} handlePenalty={jest.fn()}/>);

        wrapper.find('.MuiGrid-root').simulate('drop', {
            dataTransfer: { getData: mockFn},
            preventDefault: jest.fn()
        });

        expect(mockFn).toHaveBeenCalledWith('tileId');
    });

    test('should call handlePenalty method when tile is placed in wrong place', () => {
        const mockFn = jest.fn();
        const wrapper = mount(<GridItemComponent id={1} handlePenalty={mockFn}/>);

        wrapper.find('.MuiGrid-root').simulate('drop', {
            dataTransfer: { getData: jest.fn()},
            preventDefault: jest.fn()
        });

        expect(mockFn).toHaveBeenCalled();
    });

    test('should decrement number of tiles in dock', () => {
        const getId = jest.fn().mockReturnValue('1');
        const mockSetNumberOfTilesInDock = jest.fn();
        document.getElementById = jest.fn().mockReturnValue({});
        const wrapper = mount(<GridItemComponent id={1} handlePenalty={jest.fn()} setNumberOfTilesInDock={mockSetNumberOfTilesInDock} numberOfTilesInDock={5}/>);

        wrapper.find('.MuiGrid-root').simulate('drop', {
            target: {
                appendChild: jest.fn()
            },
            dataTransfer: { getData: getId},
            preventDefault: jest.fn()
        });

        expect(mockSetNumberOfTilesInDock).toHaveBeenCalledWith(4);
    });
});
