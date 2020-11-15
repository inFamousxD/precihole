import React from 'react'

import {
    Row,
    Col,
    Image
} from 'react-bootstrap';

import {
    Facebook,
    PhotoLibrary,
    Email,
    YouTube,
    Instagram
} from '@material-ui/icons';

import logo from '../../assets/logo.png';

const footerStyle = {
    minHeight: '20rem',
    width: '100%',
    backgroundColor: '#222',
    color: '#aaa',
    margin: '0',
    padding: '2rem 4rem'
}

const footerTitle = {
    fontSize: '28px',
    fontWeight: '500',
    paddingBottom: '1.5rem'
}

const footerText = {
    fontSize: '16px',
    fontWeight: '300'
}

const footerText2 = {
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '35px'
}

const footerConnect = {
    fontSize: '16px',
    marginRight: '1rem'
}

const ruler = {
    backgroundColor: '#aaa',
    opacity: '0.5'
}

const Footer = () => {
    return (
        <React.Fragment>
            <Row style={footerStyle}>
                <Col>
                    <div style={footerTitle}>Reach us at</div>
                    <div style={footerText}>
                        999, Street Name, Area Name, City - 411000 <br />
                        Or Dial : 020 - 22446677
                    </div>
                    <hr style={ruler}/>
                    <div style={footerText}>
                        444, Street Name2, Area Name2, City2 - 411222 <br />
                        Or Dial : 020 - 22446688
                    </div>
                </Col>  
                <Col style={{ marginLeft: '5rem' }}>
                    <div style={footerTitle}>Connect with us</div>
                    <div style={footerText2}>
                        <Facebook style={footerConnect}/> Facebook <br />
                        <Instagram style={footerConnect}/> Instagram <br />
                        <PhotoLibrary style={footerConnect}/> Google+ <br />
                        <YouTube style={footerConnect}/> YouTube <br />
                        <Email style={footerConnect}/> mail@email.com <br />
                    </div>
                </Col> 
                <Col xs={6} lg={3} md={3} xl={3}>
                    <div style={footerTitle}>Partnered with</div>
                    <Image src={logo} fluid style={{
                        display: 'block',
                        marginTop: '3.5rem',
                        marginBottom: 'auto',
                        width: '100%'
                    }}></Image>
                </Col>  
            </Row>     
        </React.Fragment>
    )
}

export default Footer
