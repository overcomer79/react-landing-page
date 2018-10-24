import React, { Component } from 'react';
import {
    Container,
    Header,
    Button
} from 'semantic-ui-react';

import './quiz.css';

const subtitle = 'Trova le lettere mancanti per sbloccare un nuovo tassello sulla scalinata monumentale del Rettorato.';

class Quiz extends Component {

    state = {
        inputValues: this.props.solution.map(e => ''),
        exacts: this.props.solution.map(e => false),
        won: false
    }

    componentDidMount() {
        this.refs.quiz_input_0.focus();
    }

    onChangeHandler = (event, index) => {
        const { value } = event.target;
        const inputValues = JSON.parse(JSON.stringify(this.state.inputValues));
        if (value.length > 1) {
            return;
        }
        else {
            inputValues[index] = value.toUpperCase();
            this.setState({ inputValues });
        }
    }

    onkeyUpHandler = (event, index) => {
        if (event.keyCode !== 8) {
            event.target.nextSibling.focus();
        }

        const exacts = JSON.parse(JSON.stringify(this.state.exacts));

        if (event.target.value === this.props.solution[index]) {
            exacts[index] = true;
            this.setState({ exacts });
        }

        let solved = exacts.filter(x => x).length;
        if (solved === this.props.solution.length) {
            this.setState({ won: true });
        }
    }


    renderInputs = () => {
        return this.props.solution.map((el, index) => {
            let key = `quiz_input_` + index;
            return (
                <input
                    ref={key}
                    key={index}
                    disabled={this.state.exacts[index]}
                    className="quiz-input"
                    value={this.state.inputValues[index]}
                    onChange={event => this.onChangeHandler(event, index)}
                    onKeyUp={event => this.onkeyUpHandler(event, index)}
                />);
        })
    };

    renderButton() {
        console.log(this.state);
        return (
            <div>
                <Button primary basic disabled={!this.state.won}> CONTINUA IL GIOCO </Button>
                <Button primary basic> ESCI DAL GIOCO </Button>
            </div>
        );
    }

    render() {
        return (
            <Container>
                <Header className='section-header' size='huge'> {this.props.hint} </Header>
                <p>{subtitle}</p>
                <div className='quiz-area'>
                    <div className='quiz-text'>{this.props.textPreInput}</div>
                    <br />
                    <div className='quiz-text'>{this.props.textPreInput2}</div>
                    {this.renderInputs()}
                    <div className='quiz-text'>{this.props.textPostInput}</div>
                    <br />
                    <div className='quiz-text'>{this.props.textPostInput2}</div>
                </div>
                {this.renderButton()}
            </Container>
        );
    }
}

export default Quiz;