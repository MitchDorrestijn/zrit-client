//The tests for the Header class are defined here (Header can be found on any page)

import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../main/components/Header';

const wrapper = shallow(<Header />);

test('Header component should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render six NavItem components', () => {
  expect(wrapper.find('NavItem').length).toBe(6);
});

test('Should render seven NavLink components', () => {
  expect(wrapper.find('NavLink').length).toBe(7);
});

test('Should render one Nav component', () => {
  expect(wrapper.find('Nav').length).toBe(1);
});

test('Should render one Row component', () => {
  expect(wrapper.find('Row').length).toBe(1);
});

test('Should render two Col component', () => {
  expect(wrapper.find('Col').length).toBe(2);
});

test('Class .top-navigation should be rendered in a <Row />', () => {
  expect(wrapper.find('.top-navigation').text()).toBe('<Row />')
});

test('Class .nav-justified should be rendered in a <Nav />', () => {
  expect(wrapper.find('.nav-justified').text()).toBe('<Nav />')
});

test('Class .logout-btn should be rendered in a <NavLink />', () => {
  expect(wrapper.find('.logout-btn').text()).toBe('<NavLink />')
});
