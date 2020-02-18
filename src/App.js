import React from 'react';

import {BrowserRouter as HashRouter, Router, Link, Route} from 'react-router-dom';

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
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Resume', path: '/resume' },
        { title: 'Contact', path: '/contact' }
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
      <HashRouter>
        <Container className="p-0" fluid={true}>

          <Navbar className='border-bottom' bg="transparent" expand="lg">
            <Navbar.Brand>Hugh Robertson</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">

                
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                
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
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title}/>} />
          <Route path="/resume" render={() => <ResumePage title={this.state.about.title}/>} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title}/>} />
          </div>
          

          

        </Container>

      </HashRouter>

      

    );
  }
}

export default App;
