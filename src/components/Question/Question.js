import React, { Component } from 'react'

class Answer extends Component {
  render(){
    const { title } = this.props
    return (
      <div>
        <input type="radio" name={title}  />
        <span>{ title }</span>
      </div>
    )
  }
}
class Question extends Component{
  render(){
    const { answers } = this.props;

    return(
      <div className="question-answer">
        <div>{ this.props.title }</div>
        <div>
          { answers.map((answer,i) => <Answer key={i} {...answer} />) }
        </div>
      </div>
    )
  }
}

export default Question
