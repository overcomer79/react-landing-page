import React, { Component } from 'react';

import {
    Grid
} from 'semantic-ui-react';

import Layout from './../components/Layout';
/*
import TestContainer from './../components/TestContainer';
*/
import ProjectSection from './../components/projectSection/ProjectSection';
import PostSection from '../components/PostSection';
import VideoSection from '../components/VideoSection';
import SocialSection from '../components/socialSection/SocialSection';
import CooperationSection from '../components/cooperationSection/CooperationSection';
import LinkSection from '../components/linkSection/LinkSection';

class Landing extends Component {

    async componentDidMount() {
        console.log("ECCHIME");
    }

    render() {
        return (
            <div>
                <Layout>
                    <ProjectSection></ProjectSection>
                    <VideoSection></VideoSection>
                    <PostSection></PostSection>
                    <CooperationSection></CooperationSection>
                    <LinkSection></LinkSection>
                    <Grid>
                        {/* <Grid.Row>
                            <Grid.Column>
                                <TestContainer></TestContainer>
                            </Grid.Column>
                        </Grid.Row> */}
                        <Grid.Row>
                            <Grid.Column>
                                
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                
                            </Grid.Column>
                        </Grid.Row>
                        {/* <Grid.Row>
                            <Grid.Column className='extended'>
                                <SocialSection></SocialSection>
                            </Grid.Column>
                        </Grid.Row> */}
                    </Grid>
                </Layout>
            </div>
        );
    }
}

export default Landing;
