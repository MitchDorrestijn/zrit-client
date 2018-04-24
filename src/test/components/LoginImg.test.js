import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import LoginImg from '../../main/components/LoginImg';

const wrapper = shallow(<LoginImg />);

test('LoginForm component should match snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render two div elements', () => {
    expect(wrapper.find('div').length).toBe(2);
});

test('Should render img element', () => {
    expect(wrapper.find('img').length).toBe(1);
});
