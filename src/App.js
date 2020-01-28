import React, { Component } from 'react'
import IdeasContainer from './IdeasContainer.js'
import IdeaForm from './IdeaForm.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [{
          title: 'Awesome Idea 1',
          description: 'One of my finest ideas'
        },
        {
          title: 'OK Idea 2',
          description: 'The OKest idea'
        }
      ]
    };
  };
  addIdea = (idea) => {
    this.setState(({ideas: [...this.state.ideas, idea]}));
  }
  removeIdea = (event) => {
    let filteredIdeas = this.state.ideas.filter(all => all.title !== event.target.id);
    this.setState(({ideas: filteredIdeas}))
  }
  render() {
    return (
        <main>
          <h1>IdeaBox!</h1>
          <IdeaForm addIdea={this.addIdea}/>
          <IdeasContainer removeIdea={this.removeIdea} ideas={this.state.ideas} />
        </main>
      )
    }
  }

export default App;
