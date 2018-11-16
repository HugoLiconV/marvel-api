import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedCharacters from './Characters';
import mockStore from '../../setupTests';
import {shallow} from "enzyme/build/index";

describe('Characters Component', function () {
  let wrapper, store;

  beforeEach(() => {
    const initialState = {
      characters: {
        characters: [],
        totalCharacters: 0,
        limit: 0,
        params: {},
        fetching: false,
      }
    };

    store = mockStore(initialState)
    wrapper = shallow(
      <ConnectedCharacters store={store}/>
    )
  })

  it('renders without crashing', () => {
    const component = wrapper.dive();
    expect(component.length).toEqual(1)
  });
});
