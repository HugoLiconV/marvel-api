import React from 'react';
import ReactDOM from 'react-dom';
import Character from './Character';

/* SMOKE TEST */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Character character={{}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Character Component', function () {
  it('should pass', function () {

  });
});