import React from "react";
import { shortenAddress } from "../../utils/utils"; // Optional if you want to shorten address

import { Verified } from "../SVG/index"; // Assuming you use this somewhere later

const Channels = ({user,name ,address ,image}) => {


  return (
    <a href="/" className="w-full !pl-0">
      <div className="flex w-full items-center gap-2 transition-colors duration-500 hover:brightness-[80%]">
        <div className="relative h-7 w-7 flex-shrink-0 flex-grow-0 rounded-md">
          <img
            alt="Channel Profile Image"
            width={29}
            height={29}
            className="rounded-md object-cover w-7 h-7"
            src={image}
            style={{ color: "transparent" }}
          />
        </div>
        <div className="flex w-full flex-col gap-[2px]">
          <span className="line-clamp-1 font-base text-base-s font-semibold text-base600">
            {name}
          </span>
          <span className="line-clamp-1 font-base text-[11px] leading-[100%] text-base400">
            {shortenAddress ? shortenAddress(address) : address}
          </span>
        </div>
      </div>
    </a>
  );
};

export default Channels;
