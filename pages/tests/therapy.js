import React, { Component } from 'react';
import Layout from '../../components/Layout';

import Quiz from '../../components/quiz/Quiz';

class Therapy extends Component {

    hint = `La terapia anti-HIV iniziata precocemente e assunta con regolarità, 
            blocca la replicazione del virus, la progressione verso l’AIDS e rende non contagiosi.`;
    
            /*
    textPreInput = 'PANE AMORE E';
    textPreInput2 = '';
    
    textPostInput = 'IA';
    textPostInput2 = '';
        */

    text = 'PANE AMORE E $$$$$IA'
    solution = ['T','E','R','A','P'];
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

export default Therapy;