import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {MemoryRouter} from "react-router-dom";
import mockStore from '../../setupTests';
import {shallow, mount} from 'enzyme';
import Comics from "../Comics/Comics";

describe('Main Component', function () {
  let wrapper, store;

  beforeEach(() => {
    const initialState = {}

    store = mockStore(initialState)
    wrapper = shallow(
      <Main store={store}/>
    )
  })

  it('renders without crashing', () => {
    // const component = wrapper
    expect(wrapper.length).toEqual(1)
  });

  // it('should render comics component',  () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={[ '/comics' ]}>
  //       <Main store={store}/>
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find(Comics)).toHaveLength(0);
  // });
});