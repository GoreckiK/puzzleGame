import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import TileComponent from "./TileComponent";

configure({adapter: new Adapter()});
describe('tileComponent', () => {
    test('should create clock div', () => {
        const tileComponent = shallow(<TileComponent x={50} y={60} id={1} handleCounterStart={() => null}/>);
        expect(tileComponent.find('div.tile').length).toEqual(1)
    });
});
