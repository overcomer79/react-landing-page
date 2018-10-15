import React, { Component } from 'react';
import {
    Tab,
    Header,
    Menu,
    Grid,
    Container,
    Image
} from 'semantic-ui-react';

const panes = [
    {
        menuItem: (<div key='none' style={{ margin: '2em' }}></div>)
    },
    {
        menuItem: (
            <Menu.Item key='Mission'>
                <Header size='large'> M I S S I O N - </Header>
            </Menu.Item>
        ),
        render: () =>
            <Tab.Pane>
                <Container>
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        </Grid.Column>
                            <Grid.Column textAlign='center' >
                                <Image src='static/images/sample_img.png' size='medium' bordered></Image>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Tab.Pane>
    },
    {
        menuItem: (
            <Menu.Item key='Vision'>
                <Header size='large'> V I S I O N + </Header>
            </Menu.Item>
        ),
        render: () =>
            <Tab.Pane>
                <Container>
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
                </Container>

            </Tab.Pane>
    }
];


class TabComponent extends Component {
    state = { activeIndex: 1 }

    handleTabChange = (e, { activeIndex }) => {
        this.setState({ activeIndex });
    }

    render() {
        const { activeIndex } = this.state;

        return (
            <Tab activeIndex={activeIndex} panes={panes} onTabChange={this.handleTabChange} />
        );

    }
}

export default TabComponent;