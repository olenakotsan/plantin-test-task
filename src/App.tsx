import React from "react";
import "./App.css";
import {
  Hero,
  Blog,
  Container,
  TopArticles,
  NewArticle,
  Banner,
  Footer,
} from "./components";
import { articlesData } from "./const/blog";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { searchTerm, setSearchTerm, filteredArticles } =
    useSearch(articlesData);

  const hasSearch = searchTerm.trim().length > 0;

  const newArticle =
    articlesData.find((i) => i.category === "new") || articlesData[0];
  const topArticles = articlesData.filter((i) => i.category === "top");

  const blogArticles = articlesData.filter((i) => !i.category);
  const firstBlog = blogArticles.slice(0, 6);
  const secondBlog = blogArticles.slice(6);

  return (
    <div>
      <Container className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col gap-14 md:gap-4">
          <Hero searchValue={searchTerm} onSearchChange={setSearchTerm} />
          {hasSearch ? (
            <Blog articles={filteredArticles} />
          ) : (
            <>
              <NewArticle article={newArticle} />
              <TopArticles articles={topArticles} />
              <Blog articles={firstBlog} header />
              <Banner />
              <Blog articles={secondBlog} />
            </>
          )}
        </div>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
