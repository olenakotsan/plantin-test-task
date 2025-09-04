import React, { FC, useState } from "react";
import { Button, SearchInput } from "./ui";
import { getImageSrc } from "../utils";

export const Banner: FC = () => {
  const [search, setSearch] = useState("");

  const logoImageUrl = getImageSrc("/images/logo.svg");
  const heroImageUrl = getImageSrc("/images/banner.svg");

  return (
    <section className="bg-gradient-to-r from-bg-light to-bg-dark rounded-2xl h-64">
      <div className="flex flex-row items-start justify-between ">
        <div className="flex flex-col gap-y-4 items-start pt-6 pl-6 text-left">
          <img
            src={logoImageUrl}
            alt="Logo PlantIn"
            className="object-contain"
          />
          <h1 className="text-lg font-bold text-primary-dark">
            Get unlimited access to exclusive articles
          </h1>
          <p className="text-gray-5 font-bold text-m">
            Get rid of limits and read everything you wish
          </p>
         <Button>Try For Free</Button>
        </div>
        <div className="flex self-end -mt-[9px] -mr-4">
          <img
            src={heroImageUrl}
            alt="Hero"
            className="max-h-fit object-contain"
          />
        </div>
      </div>
    </section>
  );
};
