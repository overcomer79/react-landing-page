import React, { Component } from 'react';

import SimpleStorage from 'react-simple-storage';
import "babel-polyfill"; // needed for using local storage in I.E.

import { Router } from '../routes';

import {
    Image
} from 'semantic-ui-react';

import Layout from './../components/Layout';
/*
import TestContainer from './../components/TestContainer';
*/
import ProjectSection from './../components/projectSection/ProjectSection';
import PostSection from '../components/postSection/PostSection';
import VideoSection from '../components/VideoSection';
import SocialSection from '../components/socialSection/SocialSection';
import CooperationSection from '../components/cooperationSection/CooperationSection';
import LinkSection from '../components/linkSection/LinkSection';
import ModalComponent from '../components/modalComponent/ModalComponent';
import TestReminder from '../components/testReminder/TestReminder'

class Landing extends Component {

    state = {
        down: false,
        isTestView: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);

        // This avoid to refresh the page on click of every link
        document.querySelectorAll("a[href^='/']").forEach(node => {
            node.addEventListener('click', e => {
                e.preventDefault();
                Router.pushRoute(e.target.href);
            });
        })

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }

    onClickForTest = (e) => {
        this.setState({ isTestView: true });
    }

    handleScroll = (e) => {
        const { scrollTop, scrollWidth } = document.body;

        // 1.77 rapporto w/h gif animata responsive
        // 70 header h
        const bound = scrollWidth / 1.77 - 70;

        if (parseInt(scrollTop) > bound) {
            this.setState({ down: true });
        }
        else {
            this.setState({ down: false });
        }
    }

    render() {
        return (
            <div>
                <SimpleStorage parent={this} />
                <Layout
                    down={this.state.down}
                    onClickForTest={this.onClickForTest}
                >
                    <Image src='static/images/animazione_header.gif' style={{ width: '100%' }} />
                    <ModalComponent
                        toShow={!this.state.isTestView}
                    />
                    <ProjectSection></ProjectSection>
                    <VideoSection></VideoSection>
                    <PostSection></PostSection>
                    <CooperationSection></CooperationSection>
                    <LinkSection></LinkSection>
                    <SocialSection></SocialSection>
                    <TestReminder
                        down={this.state.down}
                        toShow={!this.state.isTestView}
                    />
                </Layout>
            </div>
        );
    }
}

export default Landing;
