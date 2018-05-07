import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import UpdateZorginstelling from '../../../main/views/zorginstelling/UpdateZorginstelling';

const wrapper = shallow(<UpdateZorginstelling />);

test('<UpdateZorginstelling /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<UpdateZorginstelling /> should render one <TextContent> component', () => {
  expect(wrapper.find('TextContent').length).toBe(1);
});

test('<UpdateZorginstelling /> should render one <ZorginstellingForm> component', () => {
  expect(wrapper.find('ZorginstellingForm').length).toBe(1);
});
