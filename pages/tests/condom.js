import React, { Component } from 'react';
import Layout from '../../components/Layout';

import Quiz from '../../components/quiz/Quiz';

class Condom extends Component {

    hint = `Il preservativo elimina il rischio di contrarre l’infezione da HIV se indossato fin 
            dall'inizio del rapporto, per tutta la sua durata e se non si rompe.`;
            
    text = 'AMARCO$D$$'
    solution = ['N','O','M'];
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

export default Condom;