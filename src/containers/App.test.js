import React from 'react';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import mockStore from '../setupTests';
import {shallow, mount} from 'enzyme';

describe('App Component', function () {
  let wrapper, store;

  beforeEach(() => {
    const initialState = {
      comics: {
        fetching: false
      },
      characters: {
        fetching: false,
      }
    }

    store = mockStore(initialState)
    wrapper = shallow(
      <App store={store}/>
    )
  })

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });

});