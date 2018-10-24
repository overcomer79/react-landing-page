import React, { Component } from 'react';
import {
    Container,
    Header
} from 'semantic-ui-react';

import './quiz.css';

class Quiz extends Component {
    subtitle = 'Trova le lettere mancanti per sbloccare un nuovo tassello sulla scalinata monumentale del Rettorato.';

    renderInputs = () => {
        return this.props.solution.map((el) => <input className="quiz-input" />)
    };

    render() {
        return (
            <Container>
                <Header className='section-header' size='huge'> {this.props.hint} </Header>
                <p>{this.subtitle}</p>
                <div className='quiz-area'>
                    <div className='quiz-text'>{this.props.textPreInput}</div>
                    <br />
                    <div className='quiz-text'>{this.props.textPreInput2}</div>
                    {this.renderInputs()}
                    <div className='quiz-text'>{this.props.textPostInput}</div>
                    <br />
                    <div className='quiz-text'>{this.props.textPostInput2}</div>

                </div>
            </Container>
        );
    }
}

export default Quiz;