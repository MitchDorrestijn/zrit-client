import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import UpdatePage from '../../main/container/UpdatePage';

const wrapper = shallow(<UpdatePage match={{url: ""}} routes="" />);

test('<UpdatePage /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<UpdatePage /> should render one <Container> component', () => {
  expect(wrapper.find('Container').length).toBe(1);
});

test('<UpdatePage /> should render one <Row> component', () => {
  expect(wrapper.find('Row').length).toBe(1);
});

test('<UpdatePage /> should render one <Col> component', () => {
  expect(wrapper.find('Col').length).toBe(1);
});

test('<UpdatePage /> should render one <Header> component', () => {
  expect(wrapper.find('Header').length).toBe(1);
});

test('<UpdatePage /> should render one <Footer> component', () => {
  expect(wrapper.find('Footer').length).toBe(1);
});
