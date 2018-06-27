import React from 'react';
import 'whatwg-fetch';
import {
    Link
} from 'react-router-dom';

import './Theory.css';


class TheoryHeader extends React.Component {
     render() {
        return <div className="row-1">
            <div className="theory-header">
                <h1>{this.props.title}</h1>
            </div>
        </div>
      }
    }

class TheoryText extends React.Component {
     render() {
        return <div className="row-2-col-1">
            <div className="theory-text">
                <p>{this.props.text}</p>
            </div>
        </div>
      }
    }

class TheoryQuiz extends React.Component {
    constructor(props){
     super(props);
     this.state = {
         number: '',
         message: '',
         messageColor: '',
         buttonDisplay: 'none',
         endButtonDisplay: 'none'
     }
     }

     handleNumberChange = (event) => {
        this.setState({
            number: event.target.value
        })
     };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.number !== this.props.correctAnswer) {
            this.setState({
                message: 'Nieprawidłowa odpowiedź. Spróbuj jeszcze raz.',
                messageColor: 'rgb(182, 29, 29)',
                buttonDisplay: 'none'
            })
        } else {
            if (this.props.lessonIndex === this.props.lessons.length - 1) {
                this.setState({
                    message: 'Brawo! To już koniec.',
                    messageColor: 'rgb(87, 17, 122)',
                    endButtonDisplay: 'block'
                })
            } else {
                this.setState({
                    message: 'Prawidłowa odpowiedź!',
                    messageColor: 'rgb(15, 118, 48)',
                    buttonDisplay: 'block'
                })
            }
        }
    };

    handleClickedButton = (event) => {
        event.preventDefault();
        let nextLesson = this.props.lessonIndex + 1;
        this.props.changeLesson(nextLesson);
        this.setState({
            message: '',
            buttonDisplay: 'none',
            number: ''
        })
    };

    loadImage(index) {
        const i = index + 1;
        if(i === 1) {
            return <img src={require('../../images/ellipse3887.png')} alt="Mayan number 1"/>
        } else if(i === 2) {
            return <img src={require('../../images/path3908.png')} alt="Mayan number 2"/>
        } else if(i === 3) {
            return <img src={require('../../images/path3944.png')} alt="Mayan number 3"/>
        } else if(i === 4) {
            return <img src={require('../../images/path4004.png')} alt="Mayan number 4"/>
        }
    }

     render() {
        return <div className="row-2-col-2">
            <div className="theory-quiz">
                <div className="theory-quiz-header">
                    <h2>Jaka to liczba?</h2>
                </div>
                <div className="theory-quiz-image">
                    {this.loadImage(this.props.lessonIndex)}
                </div>
                <div className="theory-quiz-answer">
                    <form onSubmit={this.handleSubmit}>
                                <input type="text" value={this.state.number} onChange={this.handleNumberChange}/>
                                <button>Sprawdź</button>
                    </form>
                </div>
                <div className="theory-quiz-message">
                            <h3 style={{color: this.state.messageColor}}>{this.state.message}</h3>
                            <button style={{display: this.state.buttonDisplay}} onClick={this.handleClickedButton}>Przejdź dalej</button>
                            <Link to="/end" style={{display: this.state.endButtonDisplay}} className="theory-quiz-endButton"> Koniec </Link>
                </div>
            </div>
        </div>
      }
    }

export default class TheoryMain extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lessons: [],
            lessonIndex: 0
        }
    }

    goToNextLesson = el => {
        this.setState({
            lessonIndex: el
        })
    };

    componentDidMount() {
        fetch('http://my-json-server.typicode.com/Surmia/Maya-Counting-System/lessons/')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    lessons: data
                })
            });
    }

    render() {
        let currentLesson = this.state.lessonIndex;
        if(this.state.lessons.length > 0) {
            return <div className="theory-main">
                <TheoryHeader title={this.state.lessons[currentLesson].title}/>
                <TheoryText text={this.state.lessons[currentLesson].text}/>
                <TheoryQuiz correctAnswer={this.state.lessons[currentLesson].correctAnswer} changeLesson={this.goToNextLesson} lessonIndex={this.state.lessonIndex} lessons={this.state.lessons} />
            </div>
        } else {
            return null;
        }
    }
}
