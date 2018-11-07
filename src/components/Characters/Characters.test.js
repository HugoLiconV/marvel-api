import React from 'react';
import ReactDOM from 'react-dom';
import Characters from './Characters';

/* SMOKE TEST */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Characters/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('Characters Component', function () {
  it('should pass', function () {

  });
});
