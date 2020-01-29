import React from 'react';
import IdeaCard from './IdeaCard'

const IdeaContainer = (props) => {
  let cards = props.ideas.map(idea => <IdeaCard key={idea.title} deleteIdea={props.deleteIdea} title={idea.title} description={idea.description} />);
  return (<article>{cards}</article>)
}

export default IdeaContainer;
