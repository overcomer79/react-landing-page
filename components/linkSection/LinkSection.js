/**
 * TODO: Inserire i link effettivi
 */

import React from 'react';
import {
    Header,
    Container,
    Icon,
    Grid,
    GridColumn
} from 'semantic-ui-react';

export default () => {
    return (
        <div>
            <Header sub textAlign='center' style={{ marginTop: 30, marginBottom: 30 }}>
                <a className='section-title'> LINK UTILI </a>
            </Header>
            <Container>
                <Grid textAlign='center'>
                    <Grid.Row columns={3}>
                        <GridColumn>
                            <a href='#'><Icon name='linkify'/> Start talkinking.Stop HIV. </a>
                        </GridColumn>
                        <GridColumn>
                            <a href='#'><Icon name='linkify'/> Salute.gov.it/FAQ - Hiv e Aids </a>
                        </GridColumn>
                        <GridColumn>
                            <a href='#'><Icon name='linkify'/> worldiadsday.org </a>
                        </GridColumn>
                    </Grid.Row>
                    <Grid.Row columns={4}>
                        <GridColumn>
                            <a href='#'><Icon name='linkify'/> nadironlus.org </a>
                        </GridColumn>
                        <GridColumn>
                            <a href='#'><Icon name='linkify'/> lila.it </a>
                        </GridColumn>
                        <GridColumn>
                            <a href='#'><Icon name='linkify'/> plus-onlus.it </a>
                        </GridColumn>
                        <GridColumn>
                            <a href='#'><Icon name='linkify'/> uniticontrolaids.it </a>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
}