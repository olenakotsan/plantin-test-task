import React, { FC, useState } from "react";
import { SearchInput } from "./ui";
import { getImageSrc } from "../utils";
import { useWeather } from "../hooks/useWeather";

export const Hero: FC = () => {
  const [search, setSearch] = useState("");
  const heroImageUrl = getImageSrc("/images/hero.svg");
  const { temperature, loading, error } = useWeather();

  const renderTemperature = () => {
    if (loading) return "Loading weather...";
    if (error) return "Weather currently unavailable";
    return `${temperature}°C`;
  };

  return (
    <section className="bg-primary-light rounded-2xl h-[267px]">
      <div className="flex flex-row items-start justify-end">
        <div className="flex flex-col gap-y-4 items-start pt-14 pl-14 text-left">
          <h1 className="text-lg font-bold text-primary-dark">
            Stay always tuned with planting trends
          </h1>
          <p className="text-gray-5 font-bold text-m">
            Current temperature is: {renderTemperature()}
          </p>
          <SearchInput
            value={search}
            onChange={setSearch}
            onSubmit={() => console.log(search)}
          />
        </div>
        <div className="flex self-end mt-2">
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
