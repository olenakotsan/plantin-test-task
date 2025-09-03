import React, { FC } from "react";
import { articlesData } from "../const/blog";
import { Article } from "./Article";
import { Divider } from "./ui";

export const Blog: FC = () => {
  const blogArticles = articlesData.filter((i) => !i.category);

  return (
    <section className="flex flex-col gap-y-4">
      <Divider />
      <p className="text-grey-2 uppercase text-s font-bold text-left">
        Interesting
      </p>
      <div className="grid grid-cols-3 gap-8">
        {blogArticles.map((i) => (
          <Article article={i} key={i.id} size="sm" />
        ))}
      </div>
    </section>
  );
};
