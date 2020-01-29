import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    }
  }
  changeState = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  submitIdea = (event) => {
    event.preventDefault();
    this.props.addIdea({title: this.state.title, description: this.state.description})
    this.setState({title: '', description: ''})
  }

  render() {
    return (
      <form>
        <input
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={this.changeState}
        />
        <input
          placeholder='Description...'
          name='description'
          value={this.state.description}
          onChange={this.changeState}
        />
        <button onClick={this.submitIdea}>Submit</button>
      </form>
    )
  }
}

export default Form;
