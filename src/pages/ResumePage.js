import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from '../components/Footer';
import ResDivider from '../components/ResDivider';
import EdList from '../components/EdList';
import CourseList from '../components/CourseList';
import ProjectCards from '../components/ProjectCards';
import ARVid from '../components/ARVid';
import ExpList from '../components/ExpList';

import { Button } from 'semantic-ui-react'

function ResumePage(props){
    return(
        <div className="resume-me" id="resume">

            <div className="resume-download" id="resume-download">
            <a href='../assets/images/HughResume.docx' download="HughResume.docx" target="_blank" style={{color:'black', fontsize:'500em'}}>Download Resume</a>
            </div>

            <ResDivider className="resume-div" title = "Education"/>
            <EdList/>
            <ResDivider className="resume-div" title = "Relevant Coursework"/>
            <CourseList/>
            <ResDivider className="resume-div" title = "Experience"/>
            <ExpList/>
            <ResDivider className="resume-div" title = "Projects"/>
            <ProjectCards/>

            {/*
            <ResDivider className="resume-div" title = "Resume in AR"/>
            <ARVid/>
            */}
        </div>
    );
}

export default ResumePage;