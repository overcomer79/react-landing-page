import React, { Component } from 'react';
import Layout from '../../components/Layout';

import Quiz from '../../components/quiz/Quiz';

class Condom extends Component {

    hint = `Anche se risulti positivo non sei infettivo.`;
    
    textPreInput = '';
    textPreInput2 = '';
    
    textPostInput = '';
    textPostInput2 = '';

    solution = [];

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