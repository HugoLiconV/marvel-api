import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {MemoryRouter} from "react-router-dom";

/* SMOKE TEST */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Main/>
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Main Component', function () {
  it('should pass', function () {

  });
});