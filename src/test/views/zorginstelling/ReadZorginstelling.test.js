import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ReadZorginstelling from '../../../main/views/zorginstelling/ReadZorginstelling';

const wrapper = shallow(<ReadZorginstelling />);

test('<ReadZorginstelling /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<ReadZorginstelling /> should render one <TextContent> component', () => {
  expect(wrapper.find('TextContent').length).toBe(1);
});

test('<ReadZorginstelling /> should render one <ZorginstellingTable> component', () => {
  expect(wrapper.find('ZorginstellingTable').length).toBe(1);
});
