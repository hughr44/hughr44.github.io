import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Embed } from 'semantic-ui-react'

import amlogo from '../assets/images/a&mlogo.png';

function ARVid(props) {
    return(

        <Container fluid={true}>

            <Row className="justify-content-center py-2">
                <Col className="justify-content-center py-2">
                
                <Embed
                    id='O6Xo21L0ybE'
                    placeholder={amlogo}
                    source='youtube'
                />

                </Col>
            </Row>

        </Container>       

    );
    
}

export default ARVid;