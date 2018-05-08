import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import CreatePage from '../../main/container/CreatePage';

const wrapper = shallow(<CreatePage match="" routes="" />);

test('<CreatePage /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<CreatePage /> should render one <Container> component', () => {
  expect(wrapper.find('Container').length).toBe(1);
});

test('<CreatePage /> should render one <Row> component', () => {
  expect(wrapper.find('Row').length).toBe(1);
});

test('<CreatePage /> should render one <Col> component', () => {
  expect(wrapper.find('Col').length).toBe(1);
});

test('<CreatePage /> should render one <Header> component', () => {
  expect(wrapper.find('Header').length).toBe(1);
});

test('<CreatePage /> should render one <Footer> component', () => {
  expect(wrapper.find('Footer').length).toBe(1);
});
