import React, { Component } from 'react';
import './App.css';
import IdeaContainer from './IdeaContainer'
import Form from './Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [{
        title: 'Worlds are awesome',
        description: 'Hello World'
      },
      {
        title: 'I love React',
        description: 'Keep doing idea box then'
      }]
    }
  }
  addIdea = (idea) => {
    this.setState(({ideas: [...this.state.ideas, idea]}))
  }
  deleteIdea = (event) => {
    let filteredIdeas = this.state.ideas.filter(idea => event.target.id !== idea.title)
    this.setState({ideas: filteredIdeas})
  }
  render() {
  return (
    <div className="App">
      <Form addIdea={this.addIdea}/>
      <IdeaContainer deleteIdea={this.deleteIdea} ideas={this.state.ideas} />
    </div>
  );
}
}

export default App;
