import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import TablePage from '../../main/container/TablePage';

const wrapper = shallow(<TablePage />);

test('TablePage component should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render one Container component', () => {
  expect(wrapper.find('Container').length).toBe(1);
});

test('Should render one Row component', () => {
  expect(wrapper.find('Row').length).toBe(1);
});

test('Should render one Col component', () => {
  expect(wrapper.find('Col').length).toBe(1);
});

test('Should render one Footer component', () => {
  expect(wrapper.find('Footer').length).toBe(1);
});

test('Should render one Header component', () => {
  expect(wrapper.find('Header').length).toBe(1);
});
