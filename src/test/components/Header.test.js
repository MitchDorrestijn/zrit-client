import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../main/components/Header';

test('Should rende Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  //expect(wrapper.find('figure')).toBe(1);
  //expect(wrapper.find('.logout-btn').text()).toBe('<NavLink />')
});
