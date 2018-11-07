import React from 'react';
import ReactDOM from 'react-dom';
import CharacterDetails from './CharacterDetails';
import {MemoryRouter} from "react-router-dom";

/* SMOKE TEST */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter location="comics/2">
      <CharacterDetails match={{params: {id: '1111'}}}/>
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Character Details Component', function () {
  it('should pass', function () {

  });
});