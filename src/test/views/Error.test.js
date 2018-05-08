import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Error from '../../main/views/Error';

const wrapper = shallow(<Error />);

test('<Error /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<Error /> should render one <TextContent> component', () => {
  expect(wrapper.find('TextContent').length).toBe(1);
});
