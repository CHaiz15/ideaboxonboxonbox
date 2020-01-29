import React from 'react';

const IdeaCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button id={props.title} onClick={props.deleteIdea}>Delete Idea</button>
    </div>
  )
}

export default IdeaCard;
