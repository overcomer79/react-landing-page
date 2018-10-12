import React from 'react';
import {
    Grid, 
    Image, 
    Header,
    Button
} from 'semantic-ui-react';

export default () => {
    return (
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column width={12}>
                    <Header size='huge'>

                        Complimenti! <br />
                        Hai appena contratto <br />
                        il virus dell'informazione!

                    </Header>

                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                        link mollis pretium.
                    </p>
                    <Button>INIZIA</Button>
                </Grid.Column>
                <Grid.Column
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    width={4}
                >
                    <Image
                        src='static/images/hiv-ribbon.png'
                        style={{
                            maxHeight: 300,
                        }}
                    />
                </Grid.Column>
            </Grid.Row>

        </Grid>

    );
}