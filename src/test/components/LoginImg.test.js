import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import LoginImg from '../../main/components/LoginImg';

const wrapper = shallow(<LoginImg />);

test('<LoginImg /> should match snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<LoginImg /> should render <div></div> two times', () => {
    expect(wrapper.find('div').length).toBe(2);
});

test('<LoginImg /> should render one <img /> tag', () => {
    expect(wrapper.find('img').length).toBe(1);
});

test('<img /> tag should have the class .img-fluid', () => {
    expect(wrapper.find('img').hasClass('img-fluid')).toBe(true);
});
