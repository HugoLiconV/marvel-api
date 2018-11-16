import React from 'react';
import CharacterDetails from './CharacterDetails';
import {MemoryRouter, Route} from "react-router-dom";
import mockStore from '../../setupTests';
import {shallow, mount} from 'enzyme';


describe('Character Details Component', function () {
  let wrapper, store;

  beforeEach(() => {
    const initialState = {
      characters: {
        character: {},
        params: {}
      }, comics: {
        comics: [],
        params: {}
      }
    };

    store = mockStore(initialState)

    wrapper = shallow(
      <MemoryRouter location="comics/2">
        <CharacterDetails match={{params: {id: '1111'}}}/>}/>
      </MemoryRouter>
    )
  })

  it('renders without crashing', () => {
    // const component = wrapper.dive();
    expect(wrapper.find(CharacterDetails)).toExist()
    // expect(wrapper.find(CharacterDetails)).ToExists()
  });

  // it('check Prop matches with initialState', () => {
  //   // const component = wrapper.dive();
  //   expect(wrapper.props().character).toEqual({})
  // });
});