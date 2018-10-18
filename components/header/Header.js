import React from 'react';
import {
    Menu,
    Container,
    Image
} from 'semantic-ui-react';

import './header.css';

export default () => {
    const image = 'static/images/ribbon.png'
    return (
        <div>
            <Menu secondary fixed='top' style={{ backgroundColor: '#ffcaca' }}>
                <Container>
                    <Menu.Item>
                        <Image src={image} size='mini'></Image>
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>risolvi il test</Menu.Item>
                        <Menu.Item>
                            <a href='#project'>il progetto</a>
                                </Menu.Item>
                        <Menu.Item>l'installazione</Menu.Item>
                        <Menu.Item>pillole informative</Menu.Item>
                        <Menu.Item>chi siamo</Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
            <Image src='static/images/animazione_header.gif' fuild="true"  alt="Header"></Image>
        </div>
    );
}