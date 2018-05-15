import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ReadChauffeur from '../../../main/views/chauffeur/ReadChauffeur';

const wrapper = shallow(<ReadChauffeur />);

test('<ReadChauffeur /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<ReadChauffeur /> should render one <TextContent> component', () => {
  expect(wrapper.find('TextContent').length).toBe(1);
});

test('<ReadChauffeur /> should render one <ChauffeurTable> component', () => {
  expect(wrapper.find('ChauffeurTable').length).toBe(1);
});

test('<TextContent /> in <ReadChauffeur /> should have a title of Chauffeurs beheren', () => {
  const childWrapper = wrapper.find('TextContent');
  expect(childWrapper.prop('title')).toBe("Chauffeurs beheren");
});
