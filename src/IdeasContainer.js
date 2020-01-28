import React from 'react'
import IdeaCard from './IdeaCard.js'

const IdeasContainer = (props) => {
  let cards = props.ideas.map(idea => <IdeaCard removeIdea={props.removeIdea} key={idea.title} title={idea.title} description={idea.description} />)
  return (<article className='IdeasContainer'> {cards} </article>)
}

export default IdeasContainer;
