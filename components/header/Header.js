import React, { Component } from 'react';
import {
    Menu,
    Container,
    Image
} from 'semantic-ui-react';

import './header.css';

class Header extends Component {

    getImageSrc = (pos) => {
        if (pos) return 'static/images/Ribbon_logo.png';
        else return 'static/images/ribbon.png';
    }

    render() {
        return (
            <div>
                <Menu secondary fixed='top' className='header-menu'>
                    <Container>
                        <Menu.Item>
                            <Image
                                src={this.getImageSrc(this.props.down)}
                                className='header-logo'
                            />
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <a href='#'>gioca {this.props.down}</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='#project-section'>il progetto</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='#video-section'>l'installazione</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='#post-section'>pillole informative</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='#cooperation-section'>chi siamo</a>
                            </Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>
                <Image src='static/images/animazione_header.gif' style={{ width: '100%' }} />
            </div>
        );
    }
}

export default Header;