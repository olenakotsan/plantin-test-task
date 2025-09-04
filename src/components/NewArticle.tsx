import React, { FC } from "react";
import { getImageSrc } from "../utils";
import { Badge } from "./ui";
import { Article } from "../types/blog";

type Props = {
  article: Article;
};

export const NewArticle: FC<Props> = ({ article }) => {
  const imgSrc = getImageSrc(article.imageURL);

  return (
    <div className="flex flex-col gap-y-4">
      <Badge>New</Badge>
      <div className="flex flex-row gap-x-8 h-[364px]">
        <div className="w-1/2">
          <img
            src={imgSrc}
            alt={article.title}
            className="h-full object-contain"
          />
        </div>
        <div className="w-1/2 flex flex-col text-left">
          <p className="text-base text-gray-1 mb-2">
            {article.createdAt} · {article.readingTime} read
          </p>
          <p className="text-xl font-bold text-gray-5 mb-4">{article.title}</p>
          <p className="text-sm text-gray-3">{article.excerpt}</p>
        </div>
      </div>
    </div>
  );
};
