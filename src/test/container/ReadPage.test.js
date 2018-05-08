import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ReadPage from '../../main/container/ReadPage';

const wrapper = shallow(<ReadPage match="" routes="" />);

test('<ReadPage /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<ReadPage /> should render one <Container> component', () => {
  expect(wrapper.find('Container').length).toBe(1);
});

test('<ReadPage /> should render one <Row> component', () => {
  expect(wrapper.find('Row').length).toBe(1);
});

test('<ReadPage /> should render one <Col> component', () => {
  expect(wrapper.find('Col').length).toBe(1);
});

test('<CreatePage /> should render one <Header> component', () => {
  expect(wrapper.find('Header').length).toBe(1);
});

test('<CreatePage /> should render one <Footer> component', () => {
  expect(wrapper.find('Footer').length).toBe(1);
});
