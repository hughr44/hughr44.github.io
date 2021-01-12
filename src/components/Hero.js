import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import meselfie from '../assets/images/meselfie.jpg';

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={4} sm={6}>
                        <img
                            src={meselfie}
                            alt="me"
                            className="selfie"
                            style={{maxHeight: '400px', border:'2px solid black', borderRadius: '200px'}}
                        />
                    </Col>
                    <Col className="banner-text" md={8} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/hugh-robertson-045849169/" rel="new open" target="_blank">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            <a href="https://github.com/hughr44?tab=repositories" rel="new open" target="_blank">
                                <i class="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCbbnLs4BWHTc4uiaPCJBuSQ" rel="new open" target="_blank">
                                <i class="fa fa-youtube-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
    
}

export default Hero;