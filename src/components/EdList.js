import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { List, Image } from 'semantic-ui-react'

import amlogo from '../assets/images/a&mlogo.png';

function EdList(props) {
    return(
        

        <Container fluid={true}>
            <Row className="justify-content-center py-2">
                <List animated verticalAlign='middle' size={"massive"}>
                <List.Item as='a' href='https://engineering.tamu.edu/cse/index.html' target='_blank'>
                    <Image avatar src={amlogo}/>
                    <List.Content>
                        <List.Header>Texas A&M University</List.Header>
                        <List.Description>
                            Graduation date: August 2020
                        </List.Description>
                    </List.Content>
                </List.Item>
                </List>
            </Row>
            <Row className="justify-content-center pb-5">
                <List bulleted size={"huge"}>
                    <List.Item className="list-items">Major: Computer Science</List.Item>
                    <List.Item className="list-items">Minor: Business</List.Item>
                    <List.Item className="list-items">Overall GPA: 3.04</List.Item>
                    <List.Item className="list-items">Major GPA: 3.26</List.Item>
                </List>
            </Row>
        </Container>

    );
    
}

export default EdList;