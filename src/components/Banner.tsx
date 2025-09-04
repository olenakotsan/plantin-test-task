import React, { FC } from "react";
import { Button } from "./ui";
import { getImageSrc } from "../utils";
import { useWindowSize } from "../hooks/useWindowSize";

export const Banner: FC = () => {
  const logoImageUrl = getImageSrc("/images/logo.svg");
  const heroImageUrl = getImageSrc("/images/banner.svg");

  const windowSize = useWindowSize();

  return (
    <section className="bg-gradient-to-r from-bg-light to-bg-dark rounded-2xl desktop:min-h-64">
      <div className="flex flex-row items-start justify-between md:justify-center">
        <div className="flex flex-col gap-y-4 md:gap-y-2 items-start pt-6 pl-6 text-left lg:p-4">
          <img
            src={logoImageUrl}
            alt="Logo PlantIn"
            className="object-contain"
            loading="lazy"
          />
          <h1 className="text-lg font-bold text-primary-dark lg:text-md">
            Get unlimited access to exclusive articles
          </h1>
          <p className="text-gray-5 font-bold md:font-medium text-m">
            Get rid of limits and read everything you wish
          </p>
          <Button>Try For Free</Button>
        </div>
        {windowSize.width > 767 && (
          <div className="flex self-end -mt-9px -mr-4">
            <img
              src={heroImageUrl}
              alt="Hero"
              className="max-h-fit object-contain"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
};
