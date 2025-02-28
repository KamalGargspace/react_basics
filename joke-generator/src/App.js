import React, { useState } from "react";
import { JokeLoaderButton } from "./components/JokeLoaderButton"; // Corrected import
import JokeCard from "./components/JokeCard";
import { appstyle } from "./styles/styles";

export default function App() {
  const url = "https://official-joke-api.appspot.com/random_joke";
  const [isLoading, setIsLoading] = useState(false);
  const [jokes, setJoke] = useState([
    {
      id: 386,
      type: "programming",
      setup: "Why do programmers prefer dark mode?",
      punchline: "Because light attracts bugs.",
    },
  ]);

  const loadNewJoke = async () => {
    setIsLoading(true);
    const request = await fetch(url).then((response) => response.json());
    setJoke((prevJokes) => [...prevJokes, request]);
    setIsLoading(false);
  };

  const removeJoke = (id) => {
    setJoke((prevJokes) => prevJokes.filter((joke) => joke.id !== id));
  };

  return (
    <div style={appstyle}>
      <h1>Random Jokes API Test</h1>
      <JokeLoaderButton loadNewJoke={loadNewJoke} /> {/* Prop name fixed */}
      <div>
        <h3>
          {isLoading
            ? "Loading one more joke..."
            : `Random Jokes Overview (${jokes.length} joke${jokes.length !== 1 ? "s" : ""} loaded)`}
        </h3>
        {jokes.map((joke) => (
          <JokeCard joke={joke} key={joke.id} removeJoke={() => removeJoke(joke.id)} />
        ))}
      </div>
    </div>
  );
}
