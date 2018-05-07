//The tests for the Header class are defined here (Header can be found on any page)

import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../main/components/Header';
import AppRouter from '../../main/routers/AppRouter';

const props = {
  readZorginstelling: '/read/zorginstelling'
}

const wrapper = shallow(<Header routes={props} />);

test('<Header /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<Header /> should render one <Row />', () => {
  expect(wrapper.find('Row').length).toBe(1);
});

test('<Header /> should render two <Col />', () => {
  expect(wrapper.find('Col').length).toBe(2);
});

test('<Header /> should render one figure', () => {
  expect(wrapper.find('figure').length).toBe(1);
});

test('<Header /> should render one image', () => {
  expect(wrapper.find('img').length).toBe(1);
});

test('<Header /> should render <Link /> nine times', () => {
  expect(wrapper.find('Link').length).toBe(9);
});

test('<Header /> should render <Nav /> one time', () => {
  expect(wrapper.find('Nav').length).toBe(1);
});

test('<Header /> should render <NavItem /> seven times', () => {
  expect(wrapper.find('NavItem').length).toBe(7);
});

test('.top-navigation class should be applied to a <Row />', () => {
  expect(wrapper.find('.top-navigation').text()).toBe('<Row />')
});

test('.nav-justified class should be applied to a <Nav />', () => {
  expect(wrapper.find('.nav-justified').text()).toBe('<Nav />')
});

test('.logout-btn class should be applied to a <Link />', () => {
  expect(wrapper.find('.logout-btn').text()).toBe('<Link />')
});
