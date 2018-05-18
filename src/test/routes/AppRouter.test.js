import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import AppRouter from '../../main/routers/AppRouter';

const wrapper = shallow(<AppRouter />);

test('<AppRouter /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<AppRouter /> should render one <BrowserRouter> component', () => {
  expect(wrapper.find('BrowserRouter').length).toBe(1);
});

test('<AppRouter /> should render one <Switch> component', () => {
  expect(wrapper.find('Switch').length).toBe(1);
});

test('<AppRouter /> should render eight <Route> component', () => {
  expect(wrapper.find('Route').length).toBe(8);
});
