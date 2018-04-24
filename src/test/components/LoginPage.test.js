import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import LoginPage from '../../main/container/LoginPage';

const wrapper = shallow(<LoginPage />);
test('LoginPage component should match snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render one Container component', () => {
    expect(wrapper.find('Container').length).toBe(1);
});

test('Should render one Row component', () => {
    expect(wrapper.find('Row').length).toBe(1);
});

test('Should render two Col component', () => {
    expect(wrapper.find('Col').length).toBe(2);
});
