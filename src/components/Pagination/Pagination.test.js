import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination';

/* SMOKE TEST */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pagination totalRecords={200} pageLimit={20} pageNeighbours={5}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Pagination Component', function () {
  it('should pass', function () {

  });
});

