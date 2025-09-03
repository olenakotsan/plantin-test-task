import React, { FC } from "react";
import { articlesData } from "../const/blog";
import { Article } from "./Article";
import { Divider } from "./ui";

export const TopArticles: FC = () => {
  const topArticles = articlesData.filter((i) => i.category === "top");

  return (
    <section className="flex flex-col gap-y-4">
      <Divider />
      <p className="text-grey-2 uppercase text-s font-bold text-left">Top</p>
      <div className="grid grid-cols-2 gap-8">
        {topArticles.map((i) => (
          <Article article={i} key={i.id} size="md" />
        ))}
      </div>
    </section>
  );
};
