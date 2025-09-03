import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container: FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-[1074px] mx-auto px-4 mt-10 flex flex-col gap-14 ${className}`}>
      {children}
    </div>
  );
};
