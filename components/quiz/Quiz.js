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
        try {
            this.refs.quiz_input_0.focus();
        }
        catch{ }
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
        let myTarget = event.target;
        // If the user press backspace or shift
        // do not move the focus to the next cell
        if (
            event.keyCode !== 8 &&
            event.keyCode !== 16
        ) {
            // Find the next cell not disabled (exact)
            while (myTarget.nextSibling.disabled) {
                myTarget = myTarget.nextSibling;
            }
            myTarget.nextSibling.focus();
        }
        else if (
            // If the user press backspace and the cell is empty
            // focus on the previous cell
            event.keyCode === 8 &&
            (
                event.target.value === '' ||
                event.target.value === null ||
                event.target.value === undefined
            )
        ) {
            // Find the next cell not disabled (exact)
            while (myTarget.previousSibling.disabled) {
                myTarget = myTarget.previousSibling;
            }
            myTarget.previousSibling.focus();
        }

        const exacts = JSON.parse(JSON.stringify(this.state.exacts));
        if (event.target.value === this.props.solution[index]) {
            exacts[index] = true;
            this.setState({ exacts });
        }

        // Find solution?
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

    renderSolutionLink = (won) => {
        return won ? '/congrats' : '#';
    } 

    renderButton() {
        return (
            <div>
                <a href={this.renderSolutionLink(!!this.state.won)}>
                    <Button primary basic disabled={!this.state.won}> CONTINUA IL GIOCO </Button>
                </a>
                <a href='/#project-section'>
                    <Button primary basic> ESCI DAL GIOCO </Button>
                </a>
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