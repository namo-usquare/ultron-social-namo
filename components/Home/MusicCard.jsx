// import React, { useEffect, useState } from "react";
// import axios from "axios";
// //INTERNAM ICON
// import { Play, Heart } from "../SVG/index";
// import MusicPostImg from "./MusicPostImg";
// import { convertTime } from "../../utils/utils";

// const MusicCard = ({ id, music, setPlayMusic }) => {
//   return (
//     <div key={id} className="w-[100px] md:w-36">
//       <div className="relative flex h-[100px] w-[100px] shrink-0 items-center justify-center overflow-hidden rounded-md md:h-36 md:w-36">
//         <div className="c-eeqGMk">
//           <div className="relative mr-2 h-full w-full flex-shrink-0 overflow-hidden rounded-md">
//             <img
//               alt="Coming Home To You"
//               loading="lazy"
//               decoding="async"
//               data-nimg="fill"
//               sizes="144px"
//               src={"https://img.etimg.com/thumb/width-1200,height-1200,imgsize-36280,resizemode-75,msid-87162740/markets/cryptocurrency/most-expensive-bored-ape-nft-sells-for-2-7-million.jpg"}
//               style={{
//                 position: "absolute",
//                 height: "100%",
//                 width: "100%",
//                 inset: "0px",
//                 color: "transparent",
//               }}
//             />
//             <button
//               // onClick={() => setPlayMusic(music)}
//               className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
//               color="transparent"
//             >
//               <div className="absolute inset-0 bg-black/80" />
//               {/* <div className="z-above1">
//                 <Play />
//               </div> */}
//             </button>
//           </div>
//         </div>
//         <div className="absolute left-0 top-0 flex-shrink-0 flex-col justify-center gap-1 overflow-hidden rounded-br-md bg-black bg-opacity-90 h-[35px] w-[35px] md:h-[38px] md:w-[38px] flex">
//           <div className="w-full text-center font-title font-medium leading-3 text-white md:text-title-m">
//            1
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <div className="musicCardProfile" style={{ minWidth: "0px" }}>
//           <MusicPostImg
//             image={"https://img.etimg.com/thumb/width-1200,height-1200,imgsize-36280,resizemode-75,msid-87162740/markets/cryptocurrency/most-expensive-bored-ape-nft-sells-for-2-7-million.jpg"}
//           />
//           <a href={`/`}>
//             <h4 className="mt-2 line-clamp-1 font-base text-base-xs font-normal uppercase text-base800">
//               Saheb 
//             </h4>
//           </a>
//         </div>
//         <a>
//           <div className="flex flex-row items-end gap-2">
//             <h4 className="mt-1 line-clamp-1 font-title text-title-xs font-medium text-black">
//              Smoking Buddy
//             </h4>
//           </div>
//           <div className="mt-2 flex items-center">
//             <span className="text-base ml-1 text-base-xs text-base600">

//               5 likes - 4 comments`
                
//             </span>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default MusicCard;



import React from "react";
import MusicPostImg from "./MusicPostImg";
import Image from "next/image";
// import nft from '../../public/img/nft1.jpg';
// import { Play } from "../SVG/index"; // Uncomment if you want to use Play icon

const MusicCard = () => {
  const nftUsers = [
    {
      id: 1,
      artist: "Saheb",
      title: "Smoking Buddy",
      image: '/nft1.webp',
      likes: 5,
      comments: 2,
    },
    {
      id: 2,
      artist: "LunaVerse",
      title: "Moonlight Riddles",
      image: "/nft2.webp",
      likes: 12,
      comments: 4,
    },
    {
      id: 3,
      artist: "Ethan Punk",
      title: "Pixelated Dreams",
      image: "/nft3.webp",
      likes: 8,
      comments: 5,
    },
    {
      id: 4,
      artist: "Zara Ape",
      title: "Jungle Vibe",
      image: "/nft4.webp",
      likes: 18,
      comments: 9,
    },
    {
      id: 5,
      artist: "Neo Crypto",
      title: "Virtual Reality",
      image: "/nft6.webp",
      likes: 7,
      comments: 3,
    },
    {
      id: 6,
      artist: "Fiona Chain",
      title: "Metaverse Flow",
      image: "/nft5.webp",
      likes: 14,
      comments: 6,
    },
    {
      id: 7,
      artist: "Dex Hunter",
      title: "Token Symphony",
      image: "/nft7.webp",
      likes: 9,
      comments: 4,
    },
    {
      id: 8,
      artist: "Kira Eth",
      title: "Layered Beats",
      image: "/nft8.webp",
      likes: 6,
      comments: 1,
    },
    {
      id: 9,
      artist: "Milo Meta",
      title: "Web3 Anthem",
      image: "/nft9.png",
      likes: 11,
      comments: 7,
    },
    {
      id: 10,
      artist: "Ava Block",
      title: "Chain Reaction",
      image: "/nft10.png",
      likes: 20,
      comments: 10,
    },
  ];

  return (
    <div className="flex gap-6">
      {nftUsers.map((user, index) => (
        <div key={user.id} className="w-[100px] md:w-36">
          <div className="relative flex h-[100px] w-[100px] shrink-0 items-center justify-center overflow-hidden rounded-md md:h-36 md:w-36">
            <div className="relative mr-2 h-full w-full flex-shrink-0 overflow-hidden rounded-md">
              <Image
                alt={user.title}
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="144px"
                width={10}
                height={10}
                src={user.image}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
              <button
                className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
              >
                <div className="absolute inset-0 bg-black/80" />
                {/* <div className="z-above1"><Play /></div> */}
              </button>
            </div>
            <div className="absolute left-0 top-0 flex-shrink-0 flex-col justify-center gap-1 overflow-hidden rounded-br-md bg-black bg-opacity-90 h-[35px] w-[35px] md:h-[38px] md:w-[38px] flex">
              <div className="w-full text-center font-title font-medium leading-3 text-white md:text-title-m">
                {index + 1}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="musicCardProfile" style={{ minWidth: "0px" }}>
              <MusicPostImg image={user.image} />
              <a href={`/`}>
                <h4 className="mt-2 line-clamp-1 font-base text-base-xs font-normal uppercase text-base800">
                  {user.artist}
                </h4>
              </a>
            </div>
            <a>
              <div className="flex flex-row items-end gap-2">
                <h4 className="mt-1 line-clamp-1 font-title text-title-xs font-medium text-black">
                  {user.title}
                </h4>
              </div>
              <div className="mt-2 flex items-center">
                <span className="text-base ml-1 text-base-xs text-base600">
                  {user.likes} likes - {user.comments} comments
                </span>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicCard;
