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
                        <p>
                            Introduction:
                        </p>
                        <p>
                            Thank you for visiting my website! My name is Hugh Robertson and I am a recent graduate from Texas A&M University with a degree
                            in Computer Science and a minor in Business. I graduated in August 2020 and am currently seeking full time employment. On the
                            next pages of this website you can find my resume, projects, and contact information.
                        </p>
                    </Col>
                    <Col md={4} sm={6}>
                        
                    </Col>
                </Row>

                <Row className="row1">
                    <Col md={4} sm={6}>
                        
                    </Col>
                    <Col className="text1" md={8} sm={12}>
                        <p>
                            About Me:
                        </p>
                        <p>
                            If there is one thing to know about me it is that I am a problem solver. I love being presented with interesting and new problems
                            and being able to think outside of the box and come up with creative solutions. This characteristic about me is what originally drew
                            me towards computer science. Using my computer science skillset and creative ability to solve problems is something I am extremely 
                            passionate about and find to be satisfying and fulfilling. My experience with computer science started early, taking my first class
                            sophomore year of high school, continuing with the advanced course the year after, and becoming a Teacher's Assistant for the school's
                            computer science course my senior year before continuing my progress in computer science at Texas A&M.
                        </p>
                        <p>
                            Another trait that I greatly value are my interpersonal skills. I have strong verbal and non-verbal communication skills and am confident
                            in myself in voicing my opinions. I am also a thoughtfull listener and take pride in ensuring that others feel that their ideas are
                            being respected and valued. Because of these skills, I found myself taking a leadership roll in the majority of my group projects throughout
                            my college career. I take pride in breaking the stereotype of people in the computer science world being the quiet type and feel it is something
                            that sets me apart from the field.  
                        </p>
                    </Col>
                </Row>

                <Row className="row1">
                    <Col className="text1" md={8} sm={12}>
                        <p>
                            Hobbies:
                        </p>
                        <p>
                            One of my biggest passions is sports, particularly basketball and football. I was a player on the varsity basketball team in highschool and continue 
                            to play and watch both sports whenever I get the chance. Another one of my favorite hobbies is video games and Esports. I have been a gamer for as long as
                            I can remember and love to keep track of the casual and competetive gaming communities. I have participated in competetive gaming events in the past and am fortunate
                            enough to have won a small amount of money from my performances along the way. 
                        </p>
                        <p>
                            In my free time in college I continued to pursue those hobbies and additionally became involved in a few organizations. I became a member of Aggie Men's 
                            Alliance which is a leadership and social organization at Texas A&M committed to the success and brotherhood of its members and the well being 
                            of the surrounding community. Additionally, I was a founding member of the Brotherhood of Aggie Mentors, a similar organization with the goal of
                            serving the Bryan and College Station community through mentorship by developing leaders of character who uphold the core values of Texas A&M University.
                        </p>
                    </Col>
                    <Col md={4} sm={6}>
                        
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default AboutPage;