import React, { Component } from 'react';
import {
    Menu,
    Container,
    Image
} from 'semantic-ui-react';

import './header.css';

class Header extends Component {
    state = {
        image: 'static/images/ribbon.png'
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = (e) => {
        const { scrollTop, scrollWidth } = document.body;

        // 1.77 rapporto w/h gif animata responsive
        // 70 header h
        const bound = scrollWidth / 1.77 - 70;

        if (parseInt(scrollTop) > bound) {
            this.setState({ image: 'static/images/Ribbon_logo.png' });
        }
        else {
            this.setState({ image: 'static/images/ribbon.png' });
        }
    }

    render() {
        return (
            <div>
                <Menu secondary fixed='top' className='header-menu'>
                    <Container>
                        <Menu.Item>
                            <Image src={this.state.image} className='header-logo'></Image>
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <a href='#'>gioca</a>
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