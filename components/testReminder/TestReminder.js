import React, { Component } from 'react';

import {
    Container,
    Grid,
    GridColumn,
    Button
} from 'semantic-ui-react';

import './test-reminder.css';

class TestReminder extends Component {
    render() {
        return (
            <div className='test-reminder-section'>
                <Container >
                    <Grid>
                        <Grid.Row columns='two'>
                            <Grid.Column width={10}>
                                <p className='test-reminder-header'> Complimenti! Hai appena contratto il virus dell'informazione! </p>
                                <p className='test-reminder-body'> 
                                    Diffondilo e anima l'installazione collocata sulla scalinata principale
                                    dell'ateneo seguendo le nostre indicazioni.
                                </p>
                            </Grid.Column>
                            <GridColumn width={6} verticalAlign='bottom' textAlign='right'>
                                <Button primary> RISOLVI IL TEST </Button>
                            </GridColumn>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default TestReminder;