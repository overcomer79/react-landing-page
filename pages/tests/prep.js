import React, { Component } from 'react';
import Layout from '../../components/Layout';

import Quiz from '../../components/quiz/Quiz';
import { css } from 'react-emotion';
import { BounceLoader } from 'react-spinners';

const override = css`
    margin: 20vh 40vw;
`;

class PREP extends Component {

    hint = `La Profilassi Pre-Esposizione (PreP) è efficace 
            e indicata nelle persone che hanno rapporti con più partner 
            e prevede l’utilizzo di farmaci anti-HIV prima di un comportamento a rischio.`;

    text = 'RICOMINCIO DA $RE$'
    solution = ['P', 'P'];
    placeholder = '$';

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
                    <Quiz
                        hint={this.hint}
                        text={this.text}
                        placeholder={this.placeholder}
                        solution={this.solution}
                    />
                </div>
            </Layout>
        );
    }
}

export default PREP;