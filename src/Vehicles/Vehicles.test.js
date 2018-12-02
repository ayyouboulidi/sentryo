import React from 'react';
import ReactDOM from 'react-dom';
import Vehicles from './VehiclesComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Vehicles />, div);
  ReactDOM.unmountComponentAtNode(div);
});
