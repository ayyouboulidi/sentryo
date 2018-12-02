import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import './Vehicles.css';

export default class Vehicles extends Component {
    render() {
        const { results } = this.props.vehicles || {};

        return (
            <div>
                <div className="pageTitle">List of vehicles</div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Model</Table.HeaderCell>
                            <Table.HeaderCell>Details</Table.HeaderCell>
                            <Table.HeaderCell>Drivers</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            (results || []).map( row => (
                                <Table.Row key={row.url}>
                                    <Table.Cell>
                                        <Label ribbon>{row.name}</Label>
                                    </Table.Cell>
                                    <Table.Cell>{row.model}</Table.Cell>
                                    <Table.Cell>
                                        <div 
                                            className="link"
                                            onClick={() => this.props.history.push("vehicleDetails", { url: row.url })}
                                        > 
                                            Details 
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {
                                            row.pilots.map((pilotUrl, index) =>
                                                <div 
                                                    key={pilotUrl}
                                                    className="link"
                                                    onClick={() => this.props.history.push("personDetails", { url: pilotUrl })}
                                                > 
                                                    Driver {index} Details
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
