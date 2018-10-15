import React from 'react';

import {
    Header,
    Container
} from 'semantic-ui-react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default () => {
    return (
        <Container>
            <Header sub style={{ textDecorationLine: 'underline' }} > LE TESTIMONIANZE </Header>
            <Carousel>
                <div>
                    <img src="static/images/sample_img.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="static/images/sample_img.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="static/images/sample_img.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </Container>
    );
}