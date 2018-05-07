//The tests for the TextContent component are defined here (TextContent can be found on the TablePage)

import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import TextContent from '../../main/components/TextContent';

const wrapper = shallow(<TextContent />);

test('<TextContent /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('The class .textblock should be applied in a <Col />', () => {
  expect(wrapper.find('.textblock').text()).toBe('<Col />')
});

test('<TextContent /> render one <Col />', () => {
  expect(wrapper.find('Col').length).toBe(1);
});

test('<TextContent /> render one <h2></h2>', () => {
  expect(wrapper.find('h2').length).toBe(1);
});

test('<TextContent /> render one <p></p>', () => {
  expect(wrapper.find('p').length).toBe(1);
});

test('<TextContent /> render one <hr />', () => {
  expect(wrapper.find('hr').length).toBe(1);
});
