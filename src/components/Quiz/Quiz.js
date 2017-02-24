import React, { Component } from 'react'
import axios from 'axios'
import Question from '../Question/Question'

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

  displayQuestions() {
    return this.state.quiz.map((q) => {
      return (
        <div>{q.title}</div>
      )
    })
  }

  displayAnswers(){
    return this.state.quiz.map((a) => {
      return a.answers.map((answer, i) => {
        return (
        <div key={i}>{answer.title}</div>
      )
    })
  })
}

increaseScore() {
  // const answerScores = this.state.answers.map((s) => s.score)
  console.log('this: ',this.state.quiz.map(ans => ans.answers.map(scores => scores.score)));//this logs scores for each choice
  const score = this.state.score + 1
  this.setState({
    score: score
  })
}

  render(){
    const questions = this.state.quiz.map((question) => {
      return (
        <Question
            key={ question.id }
            title={ question.title }
            answers={ question.answers }
            increaseScore={ this.increaseScore }
        />
      )
    })

    return(
      <div>
        <div>Quiz Page</div>
        { questions }
        {/* <Question
          quiz={this.state.quiz}
          questions={this.displayQuestions()}
        />
        <Answers
          quiz={this.state.quiz}
          answers={this.displayAnswers()}
        /> */}
      </div>
    )
  }
}

export default Quiz
