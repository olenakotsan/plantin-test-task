import React, { FC } from "react";
import { SearchInput } from "./ui";
import { getImageSrc } from "../utils";
import { useWeather } from "../hooks/useWeather";
import { useWindowSize } from "../hooks/useWindowSize";

type Props = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

export const Hero: FC<Props> = ({ searchValue, onSearchChange }) => {
  const heroImageUrl = getImageSrc("/images/hero.svg");
  const { temperature, loading, error } = useWeather();

  const renderTemperature = () => {
    if (loading) return "Loading weather...";
    if (error) return "Weather currently unavailable";
    return `${temperature}°C`;
  };

  const windowSize = useWindowSize();

  return (
    <section className="bg-primary-light rounded-2xl min-h-267px">
      <div className="flex flex-row items-start justify-between h-full gap-x-4 md:justify-center">
        <div className="flex flex-col gap-y-4 md:gap-y-2 items-start py-14 pl-14 text-left md:p-4">
          <h1 className="text-lg font-bold text-primary-dark lg:text-md">
            Stay always tuned with planting trends
          </h1>
          {windowSize.width > 767 ? (
            <div className="text-gray-5 font-bold text-m">
              Current temperature is: {renderTemperature()}
            </div>
          ) : (
            <div className="text-m font-medium">
              <span className="font-bold">Tips & Tricks </span> selected
              specially for <span className="font-bold"> you!</span>
            </div>
          )}
          <SearchInput value={searchValue} onChange={onSearchChange} />
        </div>
        {windowSize.width > 767 && (
          <div className="md:hidden lg:w-1/2 flex self-end justify-end mt-2">
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
