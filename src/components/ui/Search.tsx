import React, { FC } from "react";
import { getImageSrc } from "../../utils";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const searchImageUrl = getImageSrc("/images/search.svg");

export const SearchInput: FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex max-w-522px w-full h-14 md:h-10 relative">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full p-4 md:p-2 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary-dark text-gray-2 shadow-sm"
      />
      <img
        src={searchImageUrl}
        alt="Search"
        className="w-6 h-6 absolute top-4 right-4 md:top-2 md:right-2"
      />
    </div>
  );
};
