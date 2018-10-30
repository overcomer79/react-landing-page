import React, { Component } from 'react';
import {
    Header,
    Container,
    Button
} from 'semantic-ui-react';

import Layout from './../components/Layout';

class Test extends Component {
    render() {
        return (
            <Layout down={true}>
                <div className='tests-container'>
                    <Container>
                        <Header className='section-header' size='huge'>Completa la tua informazione</Header>
                        <p>Seleziona e approfondisci una o più tematiche</p>
                        <div>
                            <a>
                                {/* <a href='\tests\condom'> */}
                                <Button primary basic disabled> play CONDOM </Button>
                            </a>
                            <a>
                                {/* <a href='\tests\prep'> */}
                                <Button primary basic disabled> play PREP </Button>
                            </a>
                            <a>
                                {/* <a href='\tests\pep'> */}
                                <Button primary basic disabled> play PEP </Button>
                            </a>
                        </div>
                        <div>
                                <a href='\tests\therapy'>
                                <Button primary basic> play THERAPY </Button>
                            </a>
                            <a>
                                {/* <a href='\tests\hivtest'> */}
                                <Button primary basic disabled> play HIV TEST </Button>
                            </a>
                        </div>
                    </Container>
                </div>
            </Layout>
        );
    };
}

export default Test;