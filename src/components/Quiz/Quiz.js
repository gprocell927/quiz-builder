import React, { Component } from 'react'
import axios from 'axios'
import Question from '../Question/Question'
import Header from '../Header/Header'

class Quiz extends Component {
  constructor(){
    super()
    this.state = {
      quiz: [],
      score: 0
    }

    this.increaseScore = this.increaseScore.bind(this);
  }

  componentWillMount(){
    axios
      .get('http://localhost:3001/quizzes/')
      .then(res => this.setState({ quiz: res.data.quizzes[0].questions }))
  }

  increaseScore(value) {
    this.setState({
      score: value + this.state.score
    })
  }

  render(){
    const questions = this.state.quiz

    return(
      <div>
        <Header />
        { questions.map((question, i) => (
            <Question
              key={i}
              { ...question }
              increaseScore={ this.increaseScore }
            />
          )
        ) }
      </div>
    )
  }
}

export default Quiz
