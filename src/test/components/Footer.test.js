import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Footer from '../../main/components/Footer';

const wrapper = shallow(<Footer />);

test('<Footer /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<Footer /> should have one type of <footer></footer> tags', () => {
  expect(wrapper.find('footer').length).toBe(1);
});

test('<Footer /> should have one type of <small></small> tags', () => {
  expect(wrapper.find('small').length).toBe(1);
});

test('<Footer /> should have one type of <span></span> tags', () => {
  expect(wrapper.find('span').length).toBe(1);
});

test('The phonenumber in the <Footer /> should match 020 - 123 45 67', () => {
  expect(wrapper.find('span').text()).toBe('020 - 123 45 67');
});
