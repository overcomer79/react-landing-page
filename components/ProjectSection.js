import React from 'react';
import {
    Header,
    Grid,
    Tab,
    Menu,
    Image
} from 'semantic-ui-react';

const panes = [
    {
        menuItem: (
            <Menu.Item key='Mission'>
                <Header size='large'> MISSION - </Header>
            </Menu.Item>
        ),
        render: () =>
            <Tab.Pane>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </Grid.Column>
                        <Grid.Column textAlign='center' >
                            <Image src='static/images/sample_img.png' size='medium' bordered></Image>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Tab.Pane>
    },
    {
        menuItem: (
            <Menu.Item key='Vision'>
                <Header size='large'> VISION + </Header>
            </Menu.Item>
        ),
        render: () =>
            <Tab.Pane>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        <br />
                        <br />
                        onec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        </Grid.Column>
                        <Grid.Column textAlign='center' >
                            <Image src='static/images/sample_img.png' size='medium' bordered></Image>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Tab.Pane>
    }
];

export default () => {
    return (
        <div>
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

            <Tab panes={panes} />

        </div>

    );
}