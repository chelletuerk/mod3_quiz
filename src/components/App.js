import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Quizzes from './Quizzes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      quizzes: []
    }
  }

  componentDidMount() {
    this.fetchQuizzes()
  }

  fetchQuizzes() {
    axios.get('/quizzes', {})
    .then((response) => this.setState({ quizzes: response.data.quizzes }))
    .catch(() => {
      console.log('NO AND THEN!')
    })
  }

  // postSomething() {
  //   axios.post(`/quizzes/1/questions/1478253351172`, {
  //     title: 'Chelle is cool?',
  //     answers: [{title: 'yes', score: 2}, {title: 'no', score: 0}, {title: 'maybe', score: 1}]
  //   })
  //   .then((response) => console.log(response))
  //   .catch(err => console.log('err'))
  // }

  render() {
    return (
      <div className="App">
        <Quizzes
          quizzes={this.state.quizzes}
        />
        {/* <button onClick={() => this.postSomething()}>Post</button> */}
      </div>
    );
  }
}

export default App;
