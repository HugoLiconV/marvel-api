import React from 'react';
import ReactDOM from 'react-dom';
import ComicDetails from './ComicDetails';
import {MemoryRouter} from "react-router-dom";

/* SMOKE TEST */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter location="comics/2">
      <ComicDetails match={{params: {id: '1111'}}}/>
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Comic Details Component', function () {
  it('should pass', function () {

  });
});