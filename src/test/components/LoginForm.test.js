import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import LoginForm from '../../main/components/LoginForm';

const wrapper = shallow(<LoginForm />);

test('LoginForm component should match snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render two div elements', () => {
    expect(wrapper.find('div').length).toBe(2);
});

test('Should render one Form component', () => {
    expect(wrapper.find('Form').length).toBe(1);
});

test('Should render header element', () => {
    expect(wrapper.find('header').length).toBe(1);
});

test('Should render img element', () => {
    expect(wrapper.find('img').length).toBe(1);
});

test('Should render two Label component', () => {
    expect(wrapper.find('Label').length).toBe(2);
});

test('Should render two Input component', () => {
    expect(wrapper.find('Input').length).toBe(2);
});

test('Should render one Button component', () => {
    expect(wrapper.find('Button').length).toBe(1);
});
