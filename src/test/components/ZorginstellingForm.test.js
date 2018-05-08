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

test('<ZorginstellingForm /> should render one <Col></Col> component', () => {
  expect(wrapper.find('Col').length).toBe(1);
});

test('<ZorginstellingForm /> should render one <FormGroup></FormGroup> component', () => {
  expect(wrapper.find('FormGroup').length).toBe(1);
});

test('<ZorginstellingForm /> should render one <Input></Input> component', () => {
  expect(wrapper.find('Input').length).toBe(1);
});

test('<ZorginstellingForm /> should render one <Label></Label> component', () => {
  expect(wrapper.find('Label').length).toBe(1);
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
