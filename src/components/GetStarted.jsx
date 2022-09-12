import React from "react";
import { arrowUp } from "../assets";

import styles from "../style";

const GetStarted = () => {
  return (
    <div className="flex rounded-full bg-blue-gradient w-[140px] h-[140px] p-[2px] cursor-pointer">
      <div
        className={`${styles.flexCenter} w-[100%] h-[100%] bg-primary rounded-full flex-col`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
