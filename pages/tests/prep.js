import React, { Component } from 'react';
import Layout from '../../components/Layout';

import Quiz from '../../components/quiz/Quiz';

class PREP extends Component {

    hint = `La Profilassi Pre-Esposizione (PreP) è efficace 
            e indicata nelle persone che hanno rapporti con più partner 
            e prevede l’utilizzo di farmaci anti-HIV prima di un comportamento a rischio.`;

    text = 'RICOMINCIO DA $RE$'
    solution = ['P', 'P'];
    placeholder = '$';

    render() {
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