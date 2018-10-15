import React from 'react';
import {
    Header,
    Grid,
    Container
} from 'semantic-ui-react';

import TabComponent from './TabComponent';



export default () => {
    return (
        <div style={{paddingTop:30}}>
            <Container>
                <Header sub style={{ textDecorationLine: 'underline' }} > IL PROGETTO </Header>
                <Header size='huge'>Amare con sapienza</Header>

                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    </Grid.Column>
                        <Grid.Column>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Container>

            <TabComponent></TabComponent>
        </div>
    );
}