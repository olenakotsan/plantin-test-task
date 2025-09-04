import React, { FC } from "react";
import { Article } from "./Article";
import { Divider } from "./ui";
import { Article as ArticleType } from "../types/blog";

type Props = {
  articles: ArticleType[];
};

export const TopArticles: FC<Props> = ({ articles }) => {
  return (
    <section className="flex flex-col gap-y-4">
      <Divider />
      <p className="text-gray-2 uppercase text-s font-bold text-left">Top of the Day
      </p>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
        {articles.map((i: ArticleType) => (
          <Article article={i} key={i.id} size="md" />
        ))}
      </div>
    </section>
  );
};
