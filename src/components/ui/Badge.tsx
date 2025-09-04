import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Badge: FC<Props> = ({ children }) => {
  return (
    <div
      className="inline-block w-fit pl-5 pr-7 py-2 bg-red text-white font-semibold text-xs rounded-0.25"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, calc(100% - 8px) 50%, 100% 100%, 0 100%)",
      }}
    >
      {children}
    </div>
  );
};
