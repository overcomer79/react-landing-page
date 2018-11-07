import React, { Component } from 'react';
import {
    Header,
    Container,
    Button
} from 'semantic-ui-react';

import { css } from 'react-emotion';
import { BounceLoader } from 'react-spinners';

const override = css`
    margin: 20vh 40vw;
`;

import Layout from './../components/Layout';

class Test extends Component {
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
                        <Header className='section-header' size='huge'>Completa la tua informazione</Header>
                        <p>Seleziona e approfondisci una o più tematiche</p>
                        <div>
                            <a href='\tests\condom'>
                                <Button primary basic> play CONDOM </Button>
                            </a>

                            <a href='\tests\prep'>
                                <Button primary basic> play PREP </Button>
                            </a>

                            <a href='\tests\pep'>
                                <Button primary basic> play PEP </Button>
                            </a>
                        </div>
                        <div>
                            <a href='\tests\therapy'>
                                <Button primary basic> play THERAPY </Button>
                            </a>
                            <a href='\tests\hivtest'>
                                <Button primary basic> play HIV TEST </Button>
                            </a>
                        </div>
                    </Container>
                </div>
            </Layout>
        );
    };
}

export default Test;