import React from "react";
import {
  jokeStyle,
  infoContainer,
  metadataContainer,
  button,
  paragraph,
  bodyContainer
} from "../styles/styles";

const JokeCard = ({ joke, removeJoke }) => {  // Corrected prop destructuring
  return (
    <div style={jokeStyle}>
      <div style={infoContainer}>
        <p style={paragraph}>#{joke.id}</p>
        <p style={paragraph}>Type: {joke.type}</p>
      </div>

      <div style={bodyContainer}>
        <p style={paragraph}>{joke.setup}</p>
        <p style={paragraph}>{joke.punchline}</p>
      </div>
      <div style={metadataContainer}>
        <button style={button} onClick={removeJoke}>
          Remove Joke
        </button>
      </div>
    </div>
  );
};

export default JokeCard;
