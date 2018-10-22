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

    render() {
        return (
            <div>
                <Layout>
                    <ModalComponent></ModalComponent>
                    <ProjectSection></ProjectSection>
                    <VideoSection></VideoSection>
                    <PostSection></PostSection>
                    <CooperationSection></CooperationSection>
                    <LinkSection></LinkSection>
                    <TestReminder></TestReminder>
                </Layout>
            </div>
        );
    }
}

export default Landing;
