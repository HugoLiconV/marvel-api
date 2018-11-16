import React from 'react';
import ConnectedComics from './Comics';
import {shallow} from 'enzyme';
import '../../setupTests';
import mockStore from '../../setupTests';

describe('Comics Component', () => {
  let wrapper, store;

  beforeEach(() => {
    const initialState = {
      comics: {
        comics: [],
        totalComics: 0,
        limit: 0,
        params: {},
        fetching: false,
      }
    }

    store = mockStore(initialState)
    wrapper = shallow(
      <ConnectedComics store={store}/>
    )
  })

  it('renders without crashing', () => {
    const component = wrapper.dive();
    expect(component.length).toEqual(1)
  });

  it('check Prop matches with initialState', () => {
    expect(wrapper.props().comics).toEqual([])
  });
});