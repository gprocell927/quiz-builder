import React, { Component } from 'react'
import axios from 'axios'

class Quiz extends Component {

  componentDidMount(){
      axios
        .get('http://localhost:3001/quizzes')
        .then(res => console.log(res))
  }

  render(){
    return(
    <div>Testing</div>
    )
  }
}

export default Quiz
