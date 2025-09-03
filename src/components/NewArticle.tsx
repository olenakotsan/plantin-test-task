import React, { FC } from "react";
import { getImageSrc } from "../utils";
import cn from "classnames";
import { articlesData } from "../const/blog";

export const NewArticle: FC = () => {
  const newArticle =
    articlesData.find((i) => i.category === "new") || articlesData[0];

  const imgSrc = getImageSrc(newArticle.imageURL);

  return (
    <div className="flex flex-row gap-x-8 h-[364px]">
      <div className="w-1/2">
        <img src={imgSrc} alt={newArticle.title} className="h-full object-contain" />
      </div>
      <div className="w-1/2 flex flex-col text-left">
        <p className="text-base text-grey-1 mb-2">
          {newArticle.createdAt} · {newArticle.readingTime} read
        </p>
        <p className="text-xl font-bold text-grey-5 mb-4">{newArticle.title}</p>
        <p className="text-sm text-grey-3">{newArticle.excerpt}</p>
      </div>
    </div>
  );
};
