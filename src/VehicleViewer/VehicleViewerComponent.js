import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const VehicleComponent = ({ vehicle }) => (
  <Card>
    <Image src='data:image/png;base64,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' />
    <Card.Content>
      <Card.Header>{vehicle.name}</Card.Header>
      <Card.Meta>
        <div className='date'>Cargo capacity: {vehicle.cargo_capacity}</div>
        <div className='date'>Consumables: {vehicle.consumables}</div>
        <div className='date'>Cost in Credits: {vehicle.cost_in_credits}</div>
      </Card.Meta>
    </Card.Content>
    <Card.Description>{vehicle.manufacturer}</Card.Description>
    <Card.Content extra>
      <div> <Icon name='tree' /> {vehicle.crew}</div>
      <div> <Icon name='eye' /> length: {vehicle.length}</div>
      <div> <Icon name='car' /> Max speed: {vehicle.max_atmosphering_speed}</div>
      <div> <Icon name='modx' /> {vehicle.model}</div>
      <div> <Icon name='car' /> {vehicle.passengers}</div>
      <div> <Icon name='car' /> {vehicle.vehicle_class}</div>
    </Card.Content>
  </Card>
);

export default VehicleComponent;