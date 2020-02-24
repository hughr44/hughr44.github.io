import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { List, Image } from 'semantic-ui-react'

function SkillsList(props) {
    return(
        
        <Container fluid={true}>
            <Row className="justify-content-center pb-5">
                <List bulleted size={"huge"}>

                    <List.Item className="list-items">C/C++</List.Item>
                    <List.Item className="list-items">Java</List.Item>
                    <List.Item className="list-items">Python</List.Item>
                    <List.Item className="list-items">MATLAB</List.Item>
                    <List.Item className="list-items">Ruby on Rails</List.Item>
                    <List.Item className="list-items">HTML</List.Item>
                    <List.Item className="list-items">JS</List.Item>
                    <List.Item className="list-items">CSS</List.Item>
                    <List.Item className="list-items">React</List.Item>
                    <List.Item className="list-items">Microsoft Visual Studio</List.Item>
                    <List.Item className="list-items">Git</List.Item>
                    <List.Item className="list-items">QT</List.Item>
                    <List.Item className="list-items">Microsoft Office</List.Item>
                    <List.Item className="list-items">Adobe Premiere Pro</List.Item>

                </List>
            </Row>
        </Container>

    );
    
}

export default SkillsList;