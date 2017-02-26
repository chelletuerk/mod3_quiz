import React, { Component } from 'react';
import '../App.css';
import Questions from './Questions'


class Quizzes extends Component {
  constructor() {
    super();
    this.state = {
      scores: {},
      total: 0,
      submitted: false,
    }
    this.updateScores = this.updateScores.bind(this)
  }

  updateScores(questionId, score) {
    const scores = {...this.state.scores}

    Object.assign(scores, { [questionId]: score })

    const total = Object.keys(scores)
      .map(key => scores[key])
      .reduce((a, b) => a + b)

    this.setState({ scores, total, submitted: false })
  }

  renderQuizzes() {
    return this.props.quizzes.map(quiz => {
      return(
        <div key={quiz.id}>
          <h1>{quiz.title}</h1>
          <Questions
            updateScores={this.updateScores}
            questions={quiz.questions}
          />
        </div>
      )
    })
  }

  renderTotal(submitted) {
    if (submitted) return <h1>Total {this.state.total}</h1>
    return <h1>Total 0</h1>
  }

  handleSubmit() {
    this.setState({ submitted: true })
  }

  render() {
    return (
      <div>
        {this.renderQuizzes()}
        <button
          onClick={() => this.handleSubmit()}
        >
          Submit
        </button>
        {this.renderTotal(this.state.submitted)}
      </div>
    )
  }
}

export default Quizzes;
