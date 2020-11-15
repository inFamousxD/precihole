import React from 'react';

import {
    Row,
    Col
} from 'react-bootstrap';

import NavInteraction from './NavInteraction';

const Navigation = () => {
    return (
        <React.Fragment>
            <div style={{
                backgroundColor: '#222',
                color: '#aaa',
                height: '3.5rem',
                width: '100%',
                fontSize: '22px',
                position: 'sticky',
                top: 0,
                zIndex: 2
            }}>
                <Row>
                    <Col style={{
                        paddingTop: '10px',
                        paddingLeft: '30px',
                    }}>COMPANY//TITLE</Col>
                    <Col xs={6} md={4} lg={4} xl={4} style={{
                        paddingLeft: '10px',
                    }}><NavInteraction /></Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Navigation
