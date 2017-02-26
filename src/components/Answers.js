import React from 'react';
import '../App.css'

class Answers extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    }
  }

  loadAnswers(e) {
    return this.props.answers.map((answers, i) => {
      return (
        <div key={i}>
          <h3>
            <input
              key={i}
              type='radio'
              name='answer'
              value={this.state.value}
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
      </div>
    )
  }
}

module.exports = Answers
