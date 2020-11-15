import React from 'react';

import {
    Carousel,
    Image
} from 'react-bootstrap';

import rifle1 from '../../assets/rifle1.png';
import rifle2 from '../../assets/rifle2.png';
import rifle3 from '../../assets/rifle3.png';

const caption = {
    color: '#222'
}

const title = {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '42px',
    textAlign: 'center',
    marginTop: '2rem',
    marginBottom: '4rem',
    color: '#222'
}

const image = {
    height: '25rem'
}

const Dashboard = () => {
    return (
        <React.Fragment>
            <div style={title}>AIR RIFLES</div>
            <Carousel style={{marginTop: '3.5rem'}}>
                <Carousel.Item>
                    <Image style={image} src={rifle1}></Image>
                    <Carousel.Caption style={caption}>
                        <h3>SX100</h3>
                        <p>Breaker Barrel Springer - 4.5 CAL</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image style={image} src={rifle2}></Image>
                    <Carousel.Caption style={caption}>
                        <h3>PX100 CLUB PRO</h3>
                        <p>Pre-Charged Pnuematic (PCP) - 4.5 CAL</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image style={image} src={rifle3}></Image>
                    <Carousel.Caption style={caption}>
                        <h3>PX100 MATCH PRO</h3>
                        <p>Pre-Charged Pnuematic (PCP) - 4.5 CAL</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    )
}

export default Dashboard
