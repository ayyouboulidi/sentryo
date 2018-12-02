import React from 'react';
import ReactDOM from 'react-dom';
import Vehicle from './VehicleViewerComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Vehicle vehicle={{}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
