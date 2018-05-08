import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import LoginForm from '../../main/components/LoginForm';

const wrapper = shallow(<LoginForm />);

test('<LoginForm /> should match snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<LoginForm /> should render one <Form />', () => {
    expect(wrapper.find('Form').length).toBe(1);
});

test('<LoginForm /> should render two <div></div> elements', () => {
    expect(wrapper.find('div').length).toBe(2);
});

test('<LoginForm /> should render one <header></header>', () => {
    expect(wrapper.find('header').length).toBe(1);
});

test('<LoginForm /> should render one <img />', () => {
    expect(wrapper.find('img').length).toBe(1);
});

test('<LoginForm /> should render <Label /> two times', () => {
    expect(wrapper.find('Label').length).toBe(2);
});

test('<LoginForm /> should render <Input /> two times', () => {
    expect(wrapper.find('Input').length).toBe(2);
});

test('<LoginForm /> should render one <Button />', () => {
    expect(wrapper.find('Button').length).toBe(1);
});
