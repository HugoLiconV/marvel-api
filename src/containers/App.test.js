import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* SMOKE TEST */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// describe('App Component', function () {
//   it('should pass', function () {
//
//   });
// });