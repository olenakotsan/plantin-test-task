import React from "react";
import "./App.css";
import {
  Hero,
  Blog,
  Container,
  TopArticles,
  NewArticle,
  Banner,
  Footer
} from "./components";
import { articlesData } from "./const/blog";

function App() {
  const newArticle =
    articlesData.find((i) => i.category === "new") || articlesData[0];
  const topArticles = articlesData.filter((i) => i.category === "top");
  const blogArticles = articlesData.filter((i) => !i.category);

  const firstBlog = blogArticles.slice(0, 6);
  const secondBlog = blogArticles.slice(6);

  return (
    <div className="App">
      <Container>
        <Hero />
        <NewArticle article={newArticle} />
        <TopArticles articles={topArticles} />
        <Blog articles={firstBlog} header/>
        <Banner />
        <Blog articles={secondBlog} />
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
