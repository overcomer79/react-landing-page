import React, { Component } from 'react';

import {
    Grid
} from 'semantic-ui-react';

import Layout from './../components/Layout';
import TestContainer from './../components/TestContainer';
import ProjectSection from './../components/ProjectSection';
import PostSection from '../components/PostSection';
import VideoSection from '../components/VideoSection';
import SocialSection from '../components/socialSection/SocialSection';
import CooperationSection from '../components/CooperationSection';

class Landing extends Component {

    async componentDidMount() {
        console.log("ECCHIME");
    }

    render() {
        return (
            <div>
                <Layout>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <TestContainer></TestContainer>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                            <Grid.Column style={{ backgroundColor: 'white'}} className='extended'>
                                <ProjectSection></ProjectSection>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column className='extended' >
                                <VideoSection></VideoSection >
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <PostSection></PostSection>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <CooperationSection></CooperationSection>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column className='extended'>
                                <SocialSection></SocialSection>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Layout>
            </div>
        );
    }
}

export default Landing;
