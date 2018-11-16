import React from 'react';
import ComicDetails from './ComicDetails';
import {shallow} from 'enzyme';
import {MemoryRouter} from "react-router-dom";


describe('Comic Details Component', function () {
  it('Comic Details renders without crashing', () => {
    shallow(
      <MemoryRouter location="comics/2">
        <ComicDetails match={{params: {id: '1111'}}}/>
      </MemoryRouter>).dive();
  });

});