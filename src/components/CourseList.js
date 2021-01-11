import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { List, Image } from 'semantic-ui-react'

import amlogo from '../assets/images/a&mlogo.png';

function CourseList(props) {
    return(
        
        <Container fluid={true}>
            <Row className="justify-content-center pb-5">
                <List bulleted size={"huge"}>
                    <List.Item className="list-items">
                        Computer Science Courses
                        <List.List>
                            <List.Item>Discrete Structures for Computing</List.Item>
                            <List.Item>Data Structures and Algorithms</List.Item>
                            <List.Item>Computer Organization</List.Item>
                            <List.Item>Introduction to Computer Systems</List.Item>
                            <List.Item>Design and Analysis of Algorithms</List.Item>
                            <List.Item>Wireless and Mobile Systems</List.Item>
                            <List.Item>Software Engineering</List.Item>
                            <List.Item>Artificial Intelligence</List.Item>
                            <List.Item>Computers and New Media</List.Item>
                            <List.Item>Human Computer Interaction</List.Item>
                            <List.Item>Information Storage and Retrieval</List.Item>
                            <List.Item>Senior Capstone Design</List.Item>
                        </List.List>
                    </List.Item>
                    <List.Item className="list-items">
                        Business Courses
                        <List.List>
                            <List.Item>Survey of Accounting Principles</List.Item>
                            <List.Item>Survey of Finance Principles</List.Item>
                            <List.Item>Survey of Management</List.Item>
                            <List.Item>Management Information Systems</List.Item>
                            <List.Item>Business, Government and Society</List.Item>
                            <List.Item>Principles of Marketing</List.Item>
                        </List.List>
                    </List.Item>
                </List>
            </Row>
        </Container>

    );
    
}

export default CourseList;