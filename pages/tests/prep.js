import React, { Component } from 'react';
import Layout from '../../components/Layout';

import Quiz from '../../components/quiz/Quiz';

class Condom extends Component {

    hint = `La Profilassi Pre-Esposizione (PreP) è efficace 
            e indicata nelle persone che hanno rapporti con più partner 
            e prevede l’utilizzo di farmaci anti-HIV prima di un comportamento a rischio.`;
    
    textPreInput = 'MI SONO INNAMORATO DI';
    textPreInput2 = 'T';
    
    textPostInput = 'E';
    textPostInput2 = '';

    solution = ['R'];

    render() {
        return (
            <Layout down={true}>
                <div className='tests-container'>
                    <Quiz
                        hint={this.hint}
                        textPreInput={this.textPreInput}
                        textPreInput2={this.textPreInput2}
                        textPostInput={this.textPostInput}
                        textPostInput2={this.textPostInput2}
                        solution={this.solution}
                    />
                </div>
            </Layout>
        );
    }
}

export default Condom;