import React from 'react';
import { Divider, Header, Icon, Table } from 'semantic-ui-react'

function ResDivider(props) {
    return(
        <React.Fragment className="divider-item">
            <Divider horizontal>
                <Header as='h4'>
                    { props.title && <h1 className="display-4 font-weight-bolder">{props.title}</h1> }
                </Header>
            </Divider>
        </React.Fragment>
    );
    
}

export default ResDivider;