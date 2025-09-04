import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-2 bg-primary-dark text-white font-medium text-sm rounded-lg hover:bg-green-800 transition-colors"
    >
      {children}
    </button>
  );
};
