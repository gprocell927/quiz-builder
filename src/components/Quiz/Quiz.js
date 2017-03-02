import React, { Component } from 'react'
import axios from 'axios'
import Question from '../Question/Question'
import Header from '../Header/Header'

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

  render(){
    const questions = this.state.quiz

    return(
      <div>
        <Header />
        { questions.map((question, i) => (
            <Question
              key={i}
              { ...question }
            />
          )
        ) }
      </div>
    )
  }
}

export default Quiz
