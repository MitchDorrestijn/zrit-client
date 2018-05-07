import React from 'react';
import {shallow, mount} from 'enzyme';
import toJSON from 'enzyme-to-json';
import sinon from 'sinon';
import ZorginstellingForm from '../../main/components/ZorginstellingForm';
import {Button} from 'reactstrap';

const wrapper = shallow(<ZorginstellingForm/>);

test('<ZorginstellingForm /> should match snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('<ZorginstellingForm /> should have one type of <Form></Form> components', () => {
  expect(wrapper.find('Form').length).toBe(1);
});

test('<ZorginstellingForm /> should have one type of <Row></Row> components', () => {
  expect(wrapper.find('Row').length).toBe(1);
});

test('<ZorginstellingForm /> should render two <Col></Col> components', () => {
  expect(wrapper.find('Col').length).toBe(2);
});

test('<ZorginstellingForm /> should render six <FormGroup></FormGroup> components', () => {
  expect(wrapper.find('FormGroup').length).toBe(6);
});

test('<ZorginstellingForm /> should render six <Input></Input> components', () => {
  expect(wrapper.find('Input').length).toBe(6);
});

test('<ZorginstellingForm /> should render six <Label></Label> components', () => {
  expect(wrapper.find('Label').length).toBe(6);
});

test('<ZorginstellingForm /> calls componentDidMount()', () => {
  sinon.spy(ZorginstellingForm.prototype, 'componentDidMount');
  const wrapper = mount(<ZorginstellingForm/>);
  expect(ZorginstellingForm.prototype.componentDidMount.calledOnce).toBe(true);
});

test('handleAddZorginstelling is called on form submit', () => {
  const handleAddZorginstelling = sinon.spy();
  const wrapper = mount((<Button onClick={handleAddZorginstelling}/>));
  wrapper.find('Button').simulate('click');
  expect(handleAddZorginstelling.calledOnce).toBe(true);
});
