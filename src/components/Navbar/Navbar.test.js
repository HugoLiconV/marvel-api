import React from 'react';
import Navbar from './Navbar';
import {shallow} from 'enzyme';
import {MemoryRouter} from "react-router-dom";

describe('<Navbar/>', function () {
  /* SMOKE TEST */
  it('renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <Navbar/>
      </MemoryRouter>
    ).dive()
  });
});
