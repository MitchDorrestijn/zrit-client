import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ReadChauffeur from '../../../main/views/client/ReadClient';

const wrapper = shallow(<ReadChauffeur />);

test('<ReadClient /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<ReadClient /> should render one <TextContent> component', () => {
  expect(wrapper.find('TextContent').length).toBe(1);
});

test('<ReadClient /> should render one <ClientTable> component', () => {
  expect(wrapper.find('ClientTable').length).toBe(1);
});

test('<TextContent /> in <ReadClient /> should have a title of Cliënten beheren', () => {
  const childWrapper = wrapper.find('TextContent');
  expect(childWrapper.prop('title')).toBe("Cliënten beheren");
});
