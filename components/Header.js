import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Menu.Item>
                HIV
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>home</Menu.Item>
                <Menu.Item>il progetto</Menu.Item>
                <Menu.Item>l'instalazione</Menu.Item>
                <Menu.Item>testimonianze</Menu.Item>
                <Menu.Item>chi siamo</Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}