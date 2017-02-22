import React, { Component } from 'react'
import axios from 'axios'

class Quiz extends Component {
  constructor(){
    super()
    this.state = {
      quiz: []
    }
  }

  componentWillMount(){
      axios
        .get('http://localhost:3001/quizzes/')
        .then(res => this.setState({ quiz: res.data.quizzes[0].questions }))
  }

  displayQuestions() {
    return this.state.quiz.map((q) => {
      return (
        <div>{q.title}</div>
      )
    })
  }

  render(){
    return(
      <div>
        <div>Quiz Page</div>
        {this.displayQuestions()}
      </div>
    )
  }
}

export default Quiz
