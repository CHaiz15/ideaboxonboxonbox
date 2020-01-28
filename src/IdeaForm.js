import React, { Component } from 'react'

class IdeaForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    };
  }
  updateInput = (event) => {
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
          type="text"
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={this.updateInput}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={this.state.description}
          onChange={this.updateInput}
        />
        <button onClick={this.submitIdea}>Submit</button>
      </form>
    )
  }
}

export default IdeaForm;
