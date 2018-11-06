import React, { Component } from 'react';
import Layout from '../../components/Layout';

import Quiz from '../../components/quiz/Quiz';

class PEP extends Component {

    hint = `La Profilassi Post-Esposizione (PEP) prevede l’utilizzo di farmaci 
            anti-HIV subito dopo (entro 24-48 ore) un comportamento 
            a rischio per evitare di contrarre il virus.`;

    text = 'IN CASO DI EMERGENZA CI PENSA $E$'
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

export default PEP;