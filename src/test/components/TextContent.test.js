import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import TextContent from '../../main/components/TextContent';

const wrapper = shallow(<TextContent />);

test('TextContent component should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Class .textblock should be rendered in a <Col />', () => {
  expect(wrapper.find('.textblock').text()).toBe('<Col />')
});

test('Should render one Col component', () => {
  expect(wrapper.find('Col').length).toBe(1);
});
