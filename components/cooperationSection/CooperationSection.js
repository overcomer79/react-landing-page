/**
 * TODO: Chiedere il logo in bianco e nero e a colori di Baslicata Makers
 * TODO: Inserire i relativi link
 */

import React from 'react';

import {
    Header,
    Image,
    Container,
    Grid,
} from 'semantic-ui-react';

import './cooperation-section.css'

export default () => {
    return (
        <div>
            <a className="anchor" id="cooperation-section" />
            <Container className='cooperation-section'>
                <p> Iniziativa a cura del <b>Dipartimento di Malattie Infettive e Sanità Pubblica dell’Università Sapienza</b> </p>

                <Grid stackable columns={4}>
                    <Grid.Row textAlign='center'>
                        <Grid.Column verticalAlign='middle'>
                            <p className='cooperation-logo-desc'>Progetto vincitore di:</p>
                            <a className='cooperation-logo' href='#'>
                                <img src="static/logos/digital_health.png" alt="logo digital heath" />
                                <img src="static/logos/digital_health_colori.png" alt="logo digital heath" />
                            </a>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <p className='cooperation-logo-desc'>in collaborazione con:</p>
                            <a className='cooperation-logo' href='#'>
                                <img src="static/logos/Sapienza.png" alt="logo Sapienza" />
                                <img src="static/logos/Sapienza_colori.png" alt="logo Sapienza" />
                            </a>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <div className='cooperation-separator'></div>
                            <a className='cooperation-logo' href='#'>
                                <img src="static/logos/Snapback.png" alt="logo Snapback" />
                                <img src="static/logos/Snapback_colori.png" alt="logo Snapback" />
                            </a>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <div className='cooperation-separator'></div>
                            <a className='cooperation-logo' href='#'>
                                <img src="static/logos/BM.png" alt="logo Basilicata Makers" />
                                <img src="static/logos/BM.png" alt="logo Basilicata Makers" />
                            </a>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
}