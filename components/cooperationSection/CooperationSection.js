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
    GridColumn
} from 'semantic-ui-react';

import './cooperation-section.css'

export default () => {
    return (
        <Container className='cooperation-section'>
            <Image.Group size='small'>

                <Grid textAlign='center'>
                    <Grid.Row columns={4}>
                        <GridColumn verticalAlign='middle'>
                            <a className='cooperation-logo' href='#'>
                                <img src="static/logos/digital_health.png" alt="logo digital heath" />
                                <img src="static/logos/digital_health_colori.png" alt="logo digital heath" />
                            </a>
                        </GridColumn>
                        <GridColumn verticalAlign='middle'>
                            <a className='cooperation-logo' href='#'>
                                <img src="static/logos/Sapienza.png" alt="logo Sapienza" />
                                <img src="static/logos/Sapienza_colori.png" alt="logo Sapienza" />
                            </a>
                        </GridColumn>
                        <GridColumn verticalAlign='middle'>
                            <a className='cooperation-logo' href='#'>
                                <img src="static/logos/Snapback.png" alt="logo Snapback" />
                                <img src="static/logos/Snapback_colori.png" alt="logo Snapback" />
                            </a>
                        </GridColumn>
                        <GridColumn verticalAlign='middle'>
                            <a className='cooperation-logo' href='#'>
                                <img src="static/logos/BM.png" alt="logo Basilicata Makers" />
                                <img src="static/logos/BM.png" alt="logo Basilicata Makers" />
                            </a>
                        </GridColumn>

                    </Grid.Row>
                </Grid>
            </Image.Group>
        </Container>
    );
}