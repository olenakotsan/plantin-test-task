import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer>
      <div className="flex justify-between items-center text-xs text-gray-2">
        <div className="flex gap-x-6">
          <a href="#">Terms of Service</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Subscription Policy</a>
        </div>
        <div>©Copyright © 2020 PlantIn. All rights reserved</div>
      </div>
    </footer>
  );
};
