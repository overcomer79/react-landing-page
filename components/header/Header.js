import React, { Component } from 'react';
import {
    Menu,
    Container,
    Image
} from 'semantic-ui-react';

import './header.css';

class Header extends Component {

    getImageSrc = (pos) => {
        if (pos) return '/static/images/Ribbon_logo.png';
        else return '/static/images/ribbon.png';
    }

    render() {
        return (
            <div>
                <Menu secondary fixed='top' className='header-menu'>
                    <Container>
                        <Menu.Item>
                            <a href='/'>
                                <Image
                                    src={this.getImageSrc(this.props.down)}
                                    className='header-logo'
                                />
                            </a>
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <a
                                    href='/tests'
                                    onClick={this.props.onClickForTest}>gioca</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='/#project-section'>il progetto</a>
                            </Menu.Item>
                            <div className='header-menu-secondary'>
                                <Menu.Item>
                                    <a href='/#video-section'>l'installazione</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href='/#post-section'>pillole informative</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href='/#cooperation-section'>chi siamo</a>
                                </Menu.Item>
                            </div>
                      </Menu.Menu>
                    </Container>
                </Menu>
            </div >
        );
    }
}

export default Header;