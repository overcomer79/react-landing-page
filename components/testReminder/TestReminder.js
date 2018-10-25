import React, { Component } from 'react';

import {
    Container,
    Grid,
    GridColumn,
    Button
} from 'semantic-ui-react';

import './test-reminder.css';

class TestReminder extends Component {

    renderReminder = () => {
        return (
            <div className='test-reminder-section'>
                <Container >
                    <Grid>
                        <Grid.Row columns='two'>
                            <Grid.Column width={10}>
                                <p className='test-reminder-header'> 
                                    Complimenti! Hai appena contratto il virus dell'informazione! 
                                </p>
                                <p className='test-reminder-body'>
                                    Diffondilo e anima l'installazione collocata sulla scalinata principale
                                    dell'ateneo seguendo le nostre indicazioni.
                                </p>
                            </Grid.Column>
                            <GridColumn width={6} verticalAlign='bottom' textAlign='right'>
                                <a href='/tests' onClick={this.props.onClickForTest}>
                                    <Button primary> INIZIA IL GIOCO </Button>
                                </a>
                            </GridColumn>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }

    render() {
        return (
            <div>{(this.props.down && this.props.toShow) ? this.renderReminder() : null}</div>
        );
    }
}

export default TestReminder;