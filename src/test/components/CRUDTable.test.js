import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import CRUDTable from '../../main/components/CRUDTable';

const wrapper = shallow(<CRUDTable />);

test('CRUDTable component should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render seven TableHeaderColumn component', () => {
  expect(wrapper.find('TableHeaderColumn').length).toBe(7);
});

test('Should render one BootstrapTable component', () => {
  expect(wrapper.find('BootstrapTable').length).toBe(1);
});

// TODO: Write tests for user input
// TODO: Write tests for props
