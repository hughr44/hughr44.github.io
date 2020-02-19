import React from 'react';

import {HashRouter as Router, Link, Route} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Hugh Robertson',
      headerLinks: [
        { title: 'Home', path: '/portfolio-site/home' },
        { title: 'About', path: '/portfolio-site/about' },
        { title: 'Resume', path: '/portfolio-site/resume' },
        { title: 'Contact', path: '/portfolio-site/contact' }
      ],
      home: {
        title: 'Hugh Robertson',
        subTitle: 'Portfolio Website',
        text: 'BS in Computer Science with minor in Business'
      },
      about: {
        title: 'About Me',
      },
      resume: {
        title: 'My Resume',
      },
      contact: {
        title: 'Contact Me',
      }
    }
  }

  render(){
    const styles = require('./App.css');
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className='border-bottom' bg="transparent" expand="lg">
            <Navbar.Brand>Hugh Robertson</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">

                
                <Link className="nav-link" to="/portfolio-site/home">Home</Link>
                <Link className="nav-link" to="/portfolio-site/about">About</Link>
                <Link className="nav-link" to="/portfolio-site/resume">Resume</Link>
                <Link className="nav-link" to="/portfolio-site/contact">Contact</Link>
                
                {/*
                <Link className="nav-link" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                <Link className="nav-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                <Link className="nav-link" to="resume" spy={true} smooth={true} offset={-70} duration={500}>Resume</Link>
                <Link className="nav-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
                */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          
          <div className="main-body">
          <Route path="/portfolio-site/home" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/portfolio-site/about" render={() => <AboutPage title={this.state.about.title}/>} />
          <Route path="/portfolio-site/resume" render={() => <ResumePage title={this.state.about.title}/>} />
          <Route path="/portfolio-site/contact" render={() => <ContactPage title={this.state.contact.title}/>} />
          </div>
          

          

        </Container>

      </Router>

      

    );
  }
}

export default App;
