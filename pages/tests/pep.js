import React, { Component } from 'react';
import Layout from '../../components/Layout';

import Quiz from '../../components/quiz/Quiz';

class Condom extends Component {

    hint = `La Profilassi Post-Esposizione (PEP) prevede l’utilizzo di farmaci 
            anti-HIV subito dopo (entro 24-48 ore) un comportamento 
            a rischio per evitare di contrarre il virus.`;
    
    textPreInput = 'TUTTO A';
    textPreInput2 = '';
    
    textPostInput = 'ST';
    textPostInput2 = '';

    solution = ['P','O'];

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