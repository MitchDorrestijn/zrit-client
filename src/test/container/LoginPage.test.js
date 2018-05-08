import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import LoginPage from '../../main/container/LoginPage';

const wrapper = shallow(<LoginPage />);

test('<LoginPage /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<LoginPage /> should render one <Container> component', () => {
  expect(wrapper.find('Container').length).toBe(1);
});

test('<LoginPage /> should render one <Row> component', () => {
  expect(wrapper.find('Row').length).toBe(1);
});

test('<LoginPage /> should render two <Col> components', () => {
  expect(wrapper.find('Col').length).toBe(2);
});

test('<LoginPage /> should render one <LoginImg> component', () => {
  expect(wrapper.find('LoginImg').length).toBe(1);
});

test('<LoginPage /> should render one <LoginForm> component', () => {
  expect(wrapper.find('LoginForm').length).toBe(1);
});
