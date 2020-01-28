import React from 'react'

const IdeaCard = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={props.removeIdea} id={props.title}>Delete Me</button>
    </div>
  )
}

export default IdeaCard;
