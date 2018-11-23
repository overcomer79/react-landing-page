import React, { Component } from 'react';
import {
    Container,
    Embed,
    Header,
    Button
} from 'semantic-ui-react';

import Layout from './../components/Layout';
import { css } from 'react-emotion';
import { BounceLoader } from 'react-spinners';

const override = css`
    margin: 20vh 40vw;
`;

class Congrats extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500);
    }

    render() {
        const { loading } = this.state;

        if (loading) {
            return (
                <BounceLoader
                    className={override}
                    sizeUnit={"vw"}
                    size={20}
                    color={'#df2c3f'}
                    loading={loading}
                />
            );
        }
        return (
            <Layout down={true}>
                <div className='tests-container'>
                    <Container>
                        <Header className='section-header' size='huge'>Complimenti!</Header>
                        <p>
                            Grazie a te il virus dell’informazione si sta diffondendo rapidamente. <br />
                            Hai sbloccato un nuovo tassello dell’installazione sulla scalinata monumentale
                            del Rettorato della Sapienza.
                        </p>
                        <div style={{ textAlign: 'center' }}>

                            
                            {/* <div className='video-container'>
                                <iframe
                                    width="560" height="315"
                                    src="https://www.youtube.com/embed/P80WOvZ_khg?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;mute=1"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    >
                                </iframe>
                            </div> */}


                            <div className='video-container'>
                                <Embed
                                    id='P80WOvZ_khg?autoplay=1&amp;mute=1'
                                    brandedUI
                                    source='youtube'
                                    aspectRatio='4:3'
                                    active
                                    autoplay
                                />
                            </div>

                            <a href='\#project-section'>
                                <Button primary basic> SCOPRI IL PROGETTO </Button>
                            </a>
                            <a href='\tests'>
                                <Button primary basic> GIOCA ANCORA </Button>
                            </a>
                        </div>
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default Congrats;
