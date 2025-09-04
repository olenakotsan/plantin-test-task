import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container: FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-container mx-auto px-4 py-16 ${className}`}>
      {children}
    </div>
  );
};
