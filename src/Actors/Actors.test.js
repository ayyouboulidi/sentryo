import React from 'react';
import ReactDOM from 'react-dom';
import Actors from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Actors />, div);
  ReactDOM.unmountComponentAtNode(div);
});
