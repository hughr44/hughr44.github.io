import React from 'react';

import { Message } from 'semantic-ui-react'

function ContactPage(props){
    return(
        <div className="contact-me" id="contact">
        <Message size='massive'>
            <Message.Header>Contact Me</Message.Header>
            <p>
            Thank you for visiting my personal website! I would love to hear from you! If you would like to contact me, I can be reached through the following:
            </p>
            <p>
            Email: hughrobertson.cs@gmail.com
            </p>
            <p>
            Phone: (512)318-0199
            </p>
            <p>
            Linkedin: <a href='https://www.linkedin.com/in/hugh-robertson-045849169/' target='_blank'>https://www.linkedin.com/in/hugh-robertson-045849169/</a>
            </p>
        </Message>
        </div>
    );
}

export default ContactPage;