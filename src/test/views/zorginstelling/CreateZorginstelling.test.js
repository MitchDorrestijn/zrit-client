import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import CreateZorginstelling from '../../../main/views/zorginstelling/CreateZorginstelling';

const wrapper = shallow(<CreateZorginstelling />);

test('<CreateZorginstelling /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<CreateZorginstelling /> should render one <TextContent> component', () => {
  expect(wrapper.find('TextContent').length).toBe(1);
});

test('<CreatePage /> should render one <ZorginstellingForm> component', () => {
  expect(wrapper.find('ZorginstellingForm').length).toBe(1);
});
