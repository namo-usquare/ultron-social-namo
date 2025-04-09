// import React, { useState } from "react";

// //INTERNAL IMPORT
// import VerifiedCard from "./VerifiedCard";

// const Follow = () => {
  
//   return (
//     <div
//       // key={user?.fullName}
//       className="flex flex-col items-center gap-2 lt:flex-row"
//     >
//       <div
//         className="aspect-square h-10 w-10 overflow-hidden rounded-full bg-neutral100"
//         style={{ minWidth: "0px" }}
//       >
//         <div className="relative w-[40px]">
//           <a>
//             <div className="c-hrywGi c-hrywGi-iiaRruO-css">
//               <img
//                 // alt={user?.fullName}
//                 width={40}
//                 height={40}
//                 src={"theblockchaincoders.jpg"}
//                 style={{
//                   color: "transparent",
//                   borderRadius: "999px",
//                   aspectRatio: "1 / 1",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//           </a>
//         </div>
//       </div>
//       <div className="flex flex-1 flex-col gap-0.5">
//         <div style={{ minWidth: "0px" }}>
//           <a className="flex items-center">
//             <div className="font-title text-title-xxs font-medium text-base600">
//               Dummy
//             </div>
//             {/* {user?.verify && <VerifiedCard />} */}
//           </a>
//         </div>
//         <button className="w-fit appearance-none text-base-xs font-medium text-base500 transition-all duration-500 ease-in-out hover:text-base600">
//           10 &nbsp;followers
//         </button>
//       </div>
//       <button
//         // onClick={() => FOLLOWER(user._id)}
//         className="c-bPnuSX c-bPnuSX-cMJTpp-size-L c-bPnuSX-kiaVWo-variant-primary h-7 w-[71px] min-w-[auto] font-base text-base-s font-semibold"
//       >
//       Follow
//       </button>
//     </div>
//   );
// };

// export default Follow;




import React from "react";

const Follow = () => {
  const dummyUsers = [
    {
      name: "Alice Johnson",
      image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-36280,resizemode-75,msid-87162740/markets/cryptocurrency/most-expensive-bored-ape-nft-sells-for-2-7-million.jpg",
    },
    {
      name: "Bob Smith",
      image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
    },
    {
      name: "Charlie Brown",
      image: "https://nftnow.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-16-at-4.47.37-PM.png",
    },
    {
      name: "Daisy Ray",
      image: "https://nftnow.com/wp-content/uploads/2022/05/Bored-Ape.png",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {dummyUsers.map((user, index) => (
        <div
          key={index}
          className="flex items-center gap-4 border p-3 rounded-lg bg-dark_new"
        >
          <img
            src={user.image}
            alt={user.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <p className="text-base font-medium">{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Follow;
