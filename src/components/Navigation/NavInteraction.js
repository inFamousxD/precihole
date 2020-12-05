import React from 'react';
import {
    Button,
    Row,
    Col
} from 'react-bootstrap';

const NavInteraction = () => {
    return (
        <Row>
            <Col xs={6} lg={3} md={3} xl={3}>
                <Button variant='secondary-outline' style={{
                    color: '#aaa',
                    paddingTop: '15px'
                }}>
                    Home
                </Button>
            </Col>
            <Col xs={6} lg={3} md={3} xl={3}>
                <Button variant='secondary-outline' style={{
                    color: '#aaa',
                    paddingTop: '15px'
                }}>
                    About
                </Button>
            </Col>
            <Col xs={6} lg={3} md={3} xl={3}>
                <Button variant='secondary-outline' style={{
                    color: '#aaa',
                    paddingTop: '15px'
                }}>
                    Products
                </Button>
            </Col>
            <Col xs={6} lg={3} md={3} xl={3}>
                <Button variant='secondary-outline' style={{
                    color: '#aaa',
                    paddingTop: '15px'
                }}>
                    Contact
                </Button>
            </Col>
        </Row>
    )
}

export default NavInteraction
