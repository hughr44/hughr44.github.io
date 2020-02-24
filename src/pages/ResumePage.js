import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DownloadLink from 'react-download-link';

import Footer from '../components/Footer';
import ResDivider from '../components/ResDivider';
import EdList from '../components/EdList';
import CourseList from '../components/CourseList';
import ProjectCards from '../components/ProjectCards';
import SkillsList from '../components/SkillsList';

import ARVid from '../components/ARVid';
import ExpList from '../components/ExpList';

import { Button } from 'semantic-ui-react'

function ResumePage(props){
    return(
        <div className="resume-me" id="resume">
            
            <div className="resume-download" id="resume-download">
            <a href='https://drive.google.com/file/d/1aGoloeD4k54hkNvUAFGUJ-WSF5-RuQ1J/view?usp=sharing' target="_blank" style={{color:'black', fontsize:'500em'}}>Download Resume</a>
            </div>
            
            {/*
            <DownloadLink filename="HughResume.docx" exportFile={() => "My cached data"}>
                Download Resume
            </DownloadLink>
            */}
            <ResDivider className="resume-div" title = "Education"/>
            <EdList/>
            <ResDivider className="resume-div" title = "Relevant Coursework"/>
            <CourseList/>
            <ResDivider className="resume-div" title = "Experience"/>
            <ExpList/>
            <ResDivider className="resume-div" title = "Projects"/>
            <ProjectCards/>
            <ResDivider className="resume-div" title = "Skills"/>
            <SkillsList/>

            {/*
            <ResDivider className="resume-div" title = "Resume in AR"/>
            <ARVid/>
            */}
        </div>
    );
}

export default ResumePage;