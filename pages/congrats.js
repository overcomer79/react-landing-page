import React, { Component } from 'react';
import {
    Container,
    Embed,
    Header,
    Button
} from 'semantic-ui-react';

import Layout from './../components/Layout';


class Congrats extends Component {
    render() {
        return (
            <Layout down={true}>
                <div className='tests-container'>
                    <Container>
                        <Header className='section-header' size='huge'>Complimenti!</Header>
                        <p>
                            Hai sbloccato un nuovo tassello dell’installazione sulla scalinata monumentale. <br />
                            Grazie a te la cura è vicina ed è sotto i tuoi occhi.
                        </p>
                        <div className='video-container'>
                            <Embed
                                id='O6Xo21L0ybE'
                                brandedUI
                                source='youtube'
                            />
                        </div>
                        <div style={{ textAlign: 'center' }}>
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
