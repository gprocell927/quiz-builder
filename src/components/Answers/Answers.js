import React, { Component } from 'react'

class Answers extends Component{
  render(){
    const answers = this.props.answers
    const quiz = this.props.quiz

    return(
      <div>
        { answers }
      </div>
    )
  }
}

export default Answers
