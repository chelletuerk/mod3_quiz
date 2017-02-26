import React from 'react';
import '../App.css'

class Answers extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    }
  }

  handleChange(score) {
    const { updateScores, questionId } = this.props
    this.setState({ score }, () => {
      updateScores(questionId, score)
    })
  }

  loadAnswers(e) {
    return this.props.answers.map((answers, i) => {
      return (
        <div key={i} className="answer-choice">
          <h3>
            <input
              type='radio'
              name='answer'
              value={this.state.value}
              onChange={() => this.handleChange(answers.score)}
            />
            {answers.title}
          </h3>
        </div>
      )
    })
  }
  render(e) {
    return (
      <div id='answers'>
        {this.loadAnswers(e)}
        <h2>Score: {this.state.score}</h2>
      </div>
    )
  }
}

module.exports = Answers
