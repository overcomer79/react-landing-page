import React from 'react';
import {
    Container,
    Grid,
    Segment
} from 'semantic-ui-react';

import './footer.css';

export default () => {
    return (
        <div>
            <div className='footer-bar'>
                <Container>
                    <Grid stackable verticalAlign='middle'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <div className='footer-copy'>
                                    <p>
                                        @Tutti diritti riservati
                                    </p>
                                    <p>
                                        Amare con Sapienza è un’iniziativa a cura del Dipartimento di Malattie Infettive
                                        e Sanità Pubblica dell’Università “Sapienza” di Roma.
                                    </p>
                                </div>
                            </Grid.Column>

                            <Grid.Column>
                                <Grid stackable columns={2} verticalAlign='middle'>
                                    <Grid.Row textAlign='center'>
                                        <Grid.Column>
                                            <div className='footer-contact'>
                                                <span style={{ marginRight: 10 }}>Contattaci: </span>
                                                <a href="mailto:sample@sample.it">
                                                    <img
                                                        className='footer-icon' 
                                                        src="/static/images/email.svg"
                                                        alt="email contact"
                                                    />
                                                </a>
                                            </div>
                                        </Grid.Column >
                                        <Grid.Column>
                                             <div className='footer-contact'>
                                                <span>Seguici su: </span>
                                                <a href='https://www.facebook.com/search/top/?q=%23amareconsapienza' target='_blank'>
                                                    <img
                                                        className='footer-icon'
                                                        src="/static/images/facebook.svg"
                                                        alt='facebook page' />
                                                </a>
                                                <a href='https://www.instagram.com/explore/tags/amareconsapienza/' target='_blank'>
                                                    <img
                                                        className='footer-icon'
                                                        src="/static/images/instagram.svg"
                                                        alt='instagram page' />
                                                </a>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}