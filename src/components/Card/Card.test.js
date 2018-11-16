import React from 'react';
import Card from './Card';
import {shallow} from 'enzyme';

describe('<Card />', () => {

   const setup = () => {
    const props = {
      title: "Card Test",
      imageSrc: "https://dummyimage.com/600x400/000/fff",
      clickHandler: jest.fn()
    };
    const wrapper = shallow(<Card
      title={props.title}
      imageSrc={props.imageSrc}
      handleClick={props.clickHandler}/>);
    return {wrapper, props};
  }

  it('renders without crashing', () => {
    const {wrapper} = setup();
    expect(wrapper.find('.Card')).toExist()
  });

  it('should calls the onClick handler', function () {
    const { props, wrapper } = setup();
    const mockOnClick = props.clickHandler
    wrapper.find('.Card').simulate('click');
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
})