import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const PersonComponent = ({ person }) => (
    <Card>
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Card.Content>
        <Card.Header>{person.name}</Card.Header>
        <Card.Meta>
          <div className='date'>Birth: {person.birth_year}</div>
          <div className='date'>Mass: {person.mass}</div>
          <div className='date'>Height: {person.height}</div>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div> <Icon name='eye' /> {person.eye_color}</div>
        <div> <Icon name='eye' /> hair: {person.hair_color}</div>
        <div> <Icon name='eye' /> skin: {person.skin_color}</div>
        <div> <Icon name='male' /> {person.gender}</div>
      </Card.Content>
    </Card>
);

export default PersonComponent;