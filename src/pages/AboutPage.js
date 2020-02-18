import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage(props){
    return(
        <div className="about-me" id="about">
            <Container fluid={true}>
                <Row className="row1">
                    <Col className="text1" md={8} sm={12}>
                        <p>PAGE UNDER CONSTRUCTION</p>
                    </Col>
                    <Col md={4} sm={6}>
                        
                    </Col>
                </Row>
                <Row className="row1">
                    <Col md={4} sm={6}>
                        
                    </Col>
                    <Col className="text1" md={8} sm={12}>
                        <p>PAGE UNDER CONSTRUCTION</p>
                    </Col>
                </Row>
                <Row className="row1">
                    <Col className="text1" md={8} sm={12}>
                        <p>PAGE UNDER CONSTRUCTION</p>
                    </Col>
                    <Col md={4} sm={6}>
                        
                    </Col>
                </Row>
                <Row className="row1">
                    <Col md={4} sm={6}>
                        
                    </Col>
                    <Col className="text1" md={8} sm={12}>
                        <p>PAGE UNDER CONSTRUCTION</p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default AboutPage;