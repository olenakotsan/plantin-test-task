import React from "react";
import "./App.css";
import { Hero, Blog, Container, TopArticles, NewArticle } from "./components";

function App() {
  return (
    <div className="App">
      <Container>
        <Hero />
        <NewArticle />
        <TopArticles />
        <Blog />
      </Container>
    </div>
  );
}

export default App;
