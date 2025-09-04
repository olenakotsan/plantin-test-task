import React, { FC } from "react";
import { Article } from "./Article";
import { Divider } from "./ui";
import { Article as ArticleType } from "../types/blog";

type Props = {
  articles: ArticleType[];
  header?: boolean;
};

export const Blog: FC<Props> = ({ articles, header }) => {
  return (
    <section className="flex flex-col gap-y-4">
      {header && (
        <>
          <Divider />
          <p className="text-gray-2 uppercase text-s font-bold text-left">
            Interesting
          </p>
        </>
      )}
      <div className="grid grid-cols-3 gap-8">
        {articles.map((i: ArticleType) => (
          <Article article={i} key={i.id} size="sm" />
        ))}
      </div>
    </section>
  );
};
