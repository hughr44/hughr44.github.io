import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { List, Image } from 'semantic-ui-react'

import SSlogo from '../assets/images/SSlogo.png';

function ExpList(props) {
    return(
        

        <Container fluid={true}>
            <Row className="justify-content-center py-2">
                <List animated verticalAlign='middle' size={"massive"}>
                <List.Item as='a' href='https://www.shipstation.com/' target='_blank'>
                    <Image avatar src={SSlogo}/>
                    <List.Content>
                        <List.Header>Junior API Specialist at ShipStation</List.Header>
                        <List.Description>
                            Summer 2018
                        </List.Description>
                    </List.Content>
                </List.Item>
                </List>
            </Row>
            <Row className="justify-content-center pb-5">
                <List bulleted size={"huge"}>
                    <List.Item className="list-items">Intern with the API Support Team</List.Item>
                    <List.Item className="list-items">Assisted with API system inquiries</List.Item>
                    <List.Item className="list-items">Created a tool to assist employees (under Projects)</List.Item>
                </List>
            </Row>
        </Container>

    );
    
}

export default ExpList;