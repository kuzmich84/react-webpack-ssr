/**
 * @jest-environment jsdom
 */

import React from "react";
import {shallow} from "enzyme";
import {Dropdown} from "../Dropdown";



describe('Dropdown', () => {
    test('Should render', () => {
        const wrapper = shallow(<Dropdown button={<button/>} children={<div/>}/>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy()

    })

    test('Should render (snapshot)', ()=>{
        const wrapper = shallow(<Dropdown button={<button/>} children={<div/>}/>);

        expect(wrapper).toMatchSnapshot()
    })
})