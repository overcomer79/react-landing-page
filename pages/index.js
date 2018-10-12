import React, { Component } from 'react';

import Layout from './../components/Layout';
import TestContainer from './../components/TestContainer';
import ProjectSection from './../components/ProjectSection';
import PostSection from '../components/PostSection';
import VideoSection from '../components/VideoSection';
import SocialSection from '../components/SocialSection';

class Landing extends Component {

    async componentDidMount() {
        console.log("ECCHIME");
    }

    render() {
        return (
            <div>
                <Layout>
                    <TestContainer></TestContainer>
                    <ProjectSection></ProjectSection>
                    <PostSection></PostSection>
                    <VideoSection></VideoSection>
                    <SocialSection></SocialSection>
                </Layout>

            </div>

        );
    }
}

export default Landing;

// export default () => <div>Welcome to next.js!</div>