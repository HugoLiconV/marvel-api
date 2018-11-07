import React from 'react';
import ReactDOM from 'react-dom';
import Comics from './Comics';

/* SMOKE TEST */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comics/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Comics Component', function () {
  it('should pass', function () {

  });
});