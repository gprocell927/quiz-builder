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

  render(){
    console.log(this.state.quiz[0])
    const displayQuestions = () => {
      this.state.quiz.map((q, i) => {
        return (
          <div>{q[i].title}</div>
        )
      })
    }
    return(
    <div>
      <div>testing</div>
      {this.state.quiz ? this.displayQuestions() : <h3>No quiz</h3>}
    </div>
    )
  }
}

export default Quiz
