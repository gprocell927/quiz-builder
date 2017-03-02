import React, { Component } from 'react'
class Answer extends Component {
  render(){
    const { increaseScore, score, title } = this.props
    return (
      <div>
      <button onClick={ () => increaseScore(score) } />
      <span>{ title }</span>
      </div>
    )
  }
}
class Question extends Component{
  selectAnswer(){

  }
  // Create 'slectAnswer' method that changes questions state
  render(){
    console.log(this.props);
    const { answers, increaseScore } = this.props;

    return(
      <div>
        <div>{ this.props.title }</div>
        <div>
          { answers.map((answer,i) => <Answer key={i} {...answer} increaseScore={increaseScore} />) }
        </div>
      </div>
    )
  }
}

export default Question
