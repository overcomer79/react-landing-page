import React from 'react';
import {
    Menu,
    Container
} from 'semantic-ui-react';

export default () => {
    return (
        <Container>
            <Menu pointing secondary style={{ marginTop: '10px', marginBottom: '30px' }}>
                <Menu.Item>
                    HIV
            </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>Home</Menu.Item>
                    <Menu.Item>il progetto</Menu.Item>
                    <Menu.Item>l'installazione</Menu.Item>
                    <Menu.Item>testimonianze</Menu.Item>
                    <Menu.Item>chi siamo</Menu.Item>
                </Menu.Menu>
            </Menu>
        </Container>
    );
}