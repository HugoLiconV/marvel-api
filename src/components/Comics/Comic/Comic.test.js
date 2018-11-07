import React from 'react';
import ReactDOM from 'react-dom';
import Comic from './Comic';

/* SMOKE TEST */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comic/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('Comic Component', function () {
  it('should pass', function () {

  });
});