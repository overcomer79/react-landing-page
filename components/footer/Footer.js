import React from 'react';
import {
    Container,
    Grid
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
                                        Amare con Sapienza è un’iniziativa a cura della Sezione di Malattie Infettive 
                                        del Dipartimento di Sanità Pubblica e Malattie Infettive dell’Università “Sapienza” di Roma. <br/>
                                        <b>Responsabile:</b> Vincenzo Vullo <br/>
                                        <b>Collaboratori scientifici:</b> Miriam Lichtner, Serena Vita, Paola Zuccalà, Claudio Maria Mastroianni
                                    </p>
                                    <h5><b>CREDITS</b></h5>
                                    <p>
                                    La campagna Having Information Virus è stata ideata e realizzata da Valerio Zito e Dario Becce. <br />
                                    Sviluppo e programmazione a cura di Pierpaolo Monaco. <br />
                                    Ideazione e realizzazione installazione a cura di Lorenzo Lo sasso, Chiara Massimino, Benedetta Vita e Marco Pesoli. <br />
                                    Coordinamento: Giuseppe Morlino.
                                    </p>
                                </div>
                            </Grid.Column>

                            <Grid.Column>
                                <Grid stackable columns={2} verticalAlign='middle'>
                                    <Grid.Row textAlign='center'>
                                        <Grid.Column>
                                            <div className='footer-contact'>
                                                <span style={{ marginRight: 10 }}>Contattaci: </span>
                                                <a href="mailto:amareconsapienza@gmail.com">
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
                                                <a href='https://www.facebook.com/hashtag/amaconsapienza' target='_blank'>
                                                    <img
                                                        className='footer-icon'
                                                        src="/static/images/facebook.svg"
                                                        alt='facebook page' />
                                                </a>
                                                <a href='https://www.instagram.com/explore/tags/amaconsapienza/' target='_blank'>
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