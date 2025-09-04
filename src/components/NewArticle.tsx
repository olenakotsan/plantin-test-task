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
      <div className="flex flex-row gap-8 md:gap-4 md:flex-col md:w-full min-h-364px cursor-pointer items-center">
        <div className="w-1/2 md:w-full">
          <img
            src={imgSrc}
            alt={article.title}
            className="object-contain"
            loading="lazy"
          />
        </div>
        <div className="w-1/2 md:w-full flex flex-col text-left">
          <p className="text-base text-gray-1 mb-2">
            {article.createdAt} · {article.readingTime} read
          </p>
          <p className="text-xl md:text-md font-bold text-gray-5 mb-4 md:mb-2">{article.title}</p>
          <p className="text-sm text-gray-3">{article.excerpt}</p>
        </div>
      </div>
    </div>
  );
};
