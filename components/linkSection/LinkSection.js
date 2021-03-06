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
                <a className='section-title red'> LINK UTILI </a>
            </Header>
            <Container>
                <Grid textAlign='center'>
                    <Grid.Row columns={3}>
                        <GridColumn>
                            <a
                                href='https://www.cdc.gov/actagainstaids/campaigns/starttalking/index.html'
                                target='_blank'
                            >
                                <Icon name='linkify' />
                                Start talkinking.Stop HIV.
                            </a>
                        </GridColumn>
                        <GridColumn>
                            <a
                                href='http://www.salute.gov.it/portale/p5_1_1.jsp?lingua=italiano&id=164'
                                target='_blank'
                            >
                                <Icon name='linkify' />
                                Salute.gov.it/FAQ - Hiv e Aids
                            </a>
                        </GridColumn>
                        <GridColumn>
                            <a
                                href='https://www.worldaidsday.org'
                                target='_blank'
                            >
                                <Icon name='linkify' />
                                worldiadsday.org
                            </a>
                        </GridColumn>
                    </Grid.Row>
                    <Grid.Row columns={4}>
                        <GridColumn>
                            <a
                                href='https://www.nadironlus.org'
                                target='_blank'
                            >
                                <Icon name='linkify' />
                                nadironlus.org
                            </a>
                        </GridColumn>
                        <GridColumn>
                            <a
                                href='http://www.lila.it/it/'
                                target='_blank'
                            >
                                <Icon name='linkify' />
                                lila.it
                            </a>
                        </GridColumn>
                        <GridColumn>
                            <a 
                                target='_blank'
                                href='http://www.plus-onlus.it'
                            >
                                <Icon name='linkify' />
                                plus-onlus.it
                            </a>
                        </GridColumn>
                        <GridColumn>
                            <a
                                target='_blank'
                                href='http://www.uniticontrolaids.it'
                            >
                                <Icon name='linkify' />
                                uniticontrolaids.it
                            </a>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
}