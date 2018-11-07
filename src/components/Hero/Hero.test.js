import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero';

/* SMOKE TEST */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hero/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('Hero Component', function () {
  it('should pass', function () {

  });
});