//The tests for the Footer component are defined here (Footer can be found on any page)

import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Footer from '../../main/components/Footer';

const wrapper = shallow(<Footer />);

test('Footer component should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render one <footer> tag', () => {
  expect(wrapper.find('footer').length).toBe(1);
});

test('Should render one <small> tag', () => {
  expect(wrapper.find('small').length).toBe(1);
});

test('Should render one <span> tag', () => {
  expect(wrapper.find('span').length).toBe(1);
});

test('text above phone number should be equal to \'Heeft u vragen? Bel ons:\'', () => {
  expect(wrapper.find('small').text()).toBe('Heeft u vragen? Bel ons:');
});

test('Phone number should be equal to 020 - 123 45 67', () => {
  expect(wrapper.find('span').text()).toBe('020 - 123 45 67');
});
