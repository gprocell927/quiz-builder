import React, { Component } from 'react'

class Question extends Component{
  selectAnswer(){

  }
  // Create 'slectAnswer' method that changes questions state
  render(){
    console.log(this.props);
    const answers = this.props.answers.map((answer,i) => {
      return (
        <div key={i}>
        <button onClick={ this.props.increaseScore } />
        <span
          key={i}
          onSelect={ this.selectAnswer }
        >{ answer.title }</span>
        </div>
      )
    })

    return(
      <div>
        { this.props.title }
        { answers }
      </div>
    )
  }
}

export default Question
