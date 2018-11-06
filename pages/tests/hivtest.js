import React, { Component } from 'react';
import Layout from '../../components/Layout';

import Quiz from '../../components/quiz/Quiz';

class HIVTest extends Component {

    hint = `Nelle strutture pubbliche il test dell’HIV è sempre gratuito e confidenziale. 
            Farlo precocemente e iniziare subito la terapia giusta evita la diffusione del virus agli altri e protegge la tua salute.`;
    
    text = 'NON C’È DUE SENZA T$$$'
    solution = ['E','S','T'];
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

export default HIVTest;