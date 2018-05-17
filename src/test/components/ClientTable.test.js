import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ClientTable from '../../main/components/ClientTable';

const wrapper = shallow(<ClientTable history="" routes="" />);

const push = jest.fn();
wrapper.setProps({ history: { push } });

test('CRUDTable component should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render seven TableHeaderColumn components', () => {
  expect(wrapper.find('TableHeaderColumn').length).toBe(6);
});

test('Should render one BootstrapTable component', () => {
  expect(wrapper.find('BootstrapTable').length).toBe(1);
});

test('Should render one CSVLink component', () => {
  expect(wrapper.find('CSVLink').length).toBe(1);
});
