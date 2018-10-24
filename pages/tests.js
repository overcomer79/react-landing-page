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
                            <Button primary basic> play CONDOM </Button>                         
                            <Button primary basic> play PEP </Button>
                            <Button primary basic> play PREP </Button>
                        </div>
                        <div>
                            <Button primary basic> play TERAPY </Button>
                            <Button primary basic> play HIV TEST </Button>
                        </div>         
                    </Container>

                </div>
            </Layout>
        );
    };
}

export default Test;