import React, { Component } from 'react';
import Layout from '../../components/Layout';

import Quiz from '../../components/quiz/Quiz';

class Condom extends Component {

    hint = `Il preservativo elimina il rischio di contrarre l’infezione da HIV se indossato fin 
            dall'inizio del rapporto, per tutta la sua durata e se non si rompe.`;
    
    textPreInput = 'HAI';
    textPreInput2 = '';
    
    textPostInput = 'RATO';
    textPostInput2 = 'IL TEST?';

    solution = ['C','O','M','P'];


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