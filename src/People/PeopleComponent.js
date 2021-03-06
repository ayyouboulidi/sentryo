import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import './People.css';

export default class People extends Component {
    render() {
        const { results } = this.props.people || {};

        return (
            <div>
                <div className="pageTitle">List of people</div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Birth year</Table.HeaderCell>
                            <Table.HeaderCell>Details</Table.HeaderCell>
                            <Table.HeaderCell>Vehicles</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            (results || []).map( row => (
                                <Table.Row key={row.url}>
                                    <Table.Cell>
                                        <Label ribbon>{row.name}</Label>
                                    </Table.Cell>
                                    <Table.Cell>{row.birth_year}</Table.Cell>
                                    <Table.Cell>
                                        <div 
                                            className="link"
                                            onClick={() => this.props.history.push("personDetails", { url: row.url })}
                                        > 
                                            Details 
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {
                                            row.vehicles.map((vehicleUrl, index) =>
                                                <div 
                                                    key={vehicleUrl}
                                                    className="link"
                                                    onClick={() => this.props.history.push("vehicleDetails", { url: vehicleUrl })}
                                                > 
                                                    Vehicle {index} Details
                                                </div>
                                            )
                                        }
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>
                            <Menu floated='right' pagination>
                                <Menu.Item onClick={() => this.props.goPrevious()} icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item onClick={() => this.props.goNext()} icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </div>  
        );
  }
}
