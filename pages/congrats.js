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
                            Hai sbloccato un nuovo tassello dell’installazione sulla scalinata monumentale. <br />
                            Grazie a te la cura è vicina ed è sotto i tuoi occhi.
                        </p>
                        <div style={{ textAlign: 'center' }}>

                            {/* <div className='video-container'>
                                <Embed
                                    id='O6Xo21L0ybE'
                                    brandedUI
                                    source='youtube'
                                    size='small'
                                />
                            </div> */}

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
