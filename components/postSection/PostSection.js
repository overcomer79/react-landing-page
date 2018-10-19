import React from 'react';

import {
    Header
    
} from 'semantic-ui-react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './post-section.css';

export default () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
        >
            <div>
                <img src="static/images/img_pillole.jpg" />
                <div className='post-content'>
                    <Header sub textAlign='center'>
                        <a className='section-title'> PILLOLE INFORMATIVE </a>
                    </Header>
                    <p>TESTO 1</p>
                </div>
            </div>
            <div>
                <img src="static/images/img_pillole.jpg" />
                <div className='post-content'>
                    <Header sub textAlign='center'>
                        <a className='section-title'> PILLOLE INFORMATIVE </a>
                    </Header>
                    <p className='post-text'>
                        "Se hai avuto un rapporto ad alto rischio di contagio HIV rivolgiti <br />
                        ad un centro di Malattie Infettive entro 48-73 ore: puoi fare una terapia preventiva <br />
                        se indicato ed evitare di contrarre il virus"
                    </p>
                </div>
            </div>
            <div>
                <img src="static/images/img_pillole.jpg" />
                <div className='post-content'>
                    <Header sub textAlign='center'>
                        <a className='section-title'> PILLOLE INFORMATIVE </a>
                    </Header>
                    <p>TESTO 3</p>
                </div>
            </div>
        </Carousel>
    );
}