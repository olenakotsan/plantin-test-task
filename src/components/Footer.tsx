import React, { FC } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

export const Footer: FC = () => {
  const windowSize = useWindowSize();

  return (
    <footer>
      <div className="flex justify-between items-center text-xs text-gray-2 mt-14 md:flex-col md:gap-4 md:text-center">
        <div className="flex gap-6 md:flex-col md:gap-2">
          <a href="#">Terms of Service</a>
          {windowSize.width > 767 && <span>|</span>}
          <a href="#">Privacy Policy</a>
          {windowSize.width > 767 && <span>|</span>}
          <a href="#">Subscription Policy</a>
        </div>
        <div>©Copyright © 2020 PlantIn. All rights reserved</div>
      </div>
    </footer>
  );
};
