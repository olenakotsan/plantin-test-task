import React, { FC } from "react";
import { Article as ArticleType } from "../types/blog";
import { getImageSrc } from "../utils";

type Props = {
  article: ArticleType;
  size: "sm" | "md";
};

export const Article: FC<Props> = ({ article, size }) => {
  const imgSrc = getImageSrc(article.imageURL);

  return (
    <div
      className="flex flex-col gap-y-4 cursor-pointer"
      onClick={() => {}}
    >
      <div className="rounded-xl">
        <img
          src={imgSrc}
          alt={article.title}
          className="object-contain md:w-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-y-2 text-left pb-0.5">
        <p className="text-base text-gray-1">
          {article.createdAt} · {article.readingTime} read
        </p>
        <p className="text-md font-bold text-gray-5">{article.title}</p>
        <p className="text-sm text-gray-3">{article.excerpt}</p>
      </div>
    </div>
  );
};
