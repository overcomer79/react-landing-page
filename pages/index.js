import React, { Component } from 'react';

import {
    Grid
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
        down: false
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
            this.setState({ down: true });
        }
        else {
            this.setState({ down: false });
        }
    }

    render() {
        return (
            <div>
                <Layout down={this.state.down}>
                    <ModalComponent></ModalComponent>
                    <ProjectSection></ProjectSection>
                    <VideoSection></VideoSection>
                    <PostSection></PostSection>
                    <CooperationSection></CooperationSection>
                    <LinkSection></LinkSection>
                    <TestReminder down={this.state.down}></TestReminder>
                </Layout>
            </div>
        );
    }
}

export default Landing;
