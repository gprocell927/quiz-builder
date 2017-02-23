import React, { Component } from 'react'

class Question extends Component{

  // Create 'slectAnswer' method that changes questions state
  render(){
    console.log(this.props);
    const answers = this.props.answers.map((answer,i) => {
      return (
        <p
          key={i}
          onSelect={ this.selectAnswer }
        >{ answer.title }</p>
      )
    })

    return(
      <div>
        <button onClick={ this.props.increaseScore } />
        { this.props.title }
        { answers }
      </div>
    )
  }
}

export default Question
