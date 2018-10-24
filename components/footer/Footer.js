import React from 'react';
import {
    Header,
    Container,
    Image,
    Grid
} from 'semantic-ui-react';

import './footer.css';

export default () => {
    return (
        <div>


            <div className='footer-bar'>
                <Container>
                    <Grid verticalAlign='middle'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <div className='footer-copy'>
                                    <p> @Tutti diritti riservati </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </Grid.Column>

                            <Grid.Column>
                                <Grid verticalAlign='middle'>
                                    <Grid.Row columns={2} textAlign='center'>
                                        <Grid.Column>
                                            <div className='footer-contact'>
                                                <span style={{ marginRight: 10 }}>Contattaci: </span>
                                                <img className='footer-icon' src="static/images/email.svg"></img>
                                            </div>
                                        </Grid.Column >

                                        <Grid.Column>
                                            <div className='footer-contact'>
                                                <span>Seguici su: </span>
                                                <img className='footer-icon' src="static/images/facebook.svg"></img>
                                                <img className='footer-icon' src="static/images/instagram.svg"></img>
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