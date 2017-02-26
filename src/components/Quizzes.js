import React, { Component } from 'react';
import '../App.css';
import Questions from './Questions'


class Quizzes extends Component {

  renderQuizzes() {
    return this.props.quizzes.map(quiz => {
      return(
        <div key={quiz.id}>
          <h1>{quiz.title}</h1>
          <Questions
            questions={quiz.questions}
          />
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderQuizzes()}
      </div>
    )
  }
}

module.exports = Quizzes
