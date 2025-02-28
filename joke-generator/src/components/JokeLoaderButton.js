import React from "react";
import { button } from "../styles/styles"; // Corrected import

export function JokeLoaderButton({ loadNewJoke }) { // Renamed prop to match App.js
  return (
    <button style={button} onClick={loadNewJoke}>
      Load new Joke
    </button>
  );
}
