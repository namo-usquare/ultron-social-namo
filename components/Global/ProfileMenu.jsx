// import React, { useState, useEffect, useContext } from "react";

// ///IMPORTING CONTRCT DATA
// import { MusicNFTContext } from "../../context/context";
// import axios from "axios";
// import { shortenAddress } from "../../utils/utils";

// const ProfileMenu = ({
//   setOpenSend,
//   setTokenICO,
//   activeUser,
//   setopenComponent,
// }) => {
//   const { musicICO, buyToken, currency, network } = useContext(MusicNFTContext);

//   const [icoToken, setIcoToken] = useState();

//   useEffect(() => {
//     musicICO().then((items) => {
//       setIcoToken(items);
//     });
//   }, []);
//   ///LOGOUT
//   const LOGOUT = async (caption, fileURL) => {
//     try {
//       const res = await axios({
//         method: "GET",
//         url: `/api/auth/logout`,
//         withCredentials: true,
//       });

//       if (res.status === 200) {
//         console.log(res.data);
//         window.location.reload();
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div
//       style={{
//         position: "fixed",
//         left: "0px",
//         top: "0px",
//         transform: "translate3d(1168px, 60px, 0px)",
//         minWidth: "max-content",
//         zIndex: 1300,
//       }}
//     >
//       <div
//         className="text-base relative top-2.5 z-header flex h-fit w-[238px] flex-col rounded-md bg-white text-base-l shadow-primary"
//         tabIndex={-1}
//         style={{ outline: "none", pointerEvents: "auto" }}
//       >
//         <div className="c-kNeObI c-kNeObI-jfhyso-desktopNavHeader-true">
//           <div className="c-gQgaEb">
//             <div className="relative w-[32px]">
//               <a>
//                 <div className="c-hrywGi c-hrywGi-iloIMzw-css">
//                   <img
//                     alt="profile"
//                     width={32}
//                     height={32}
//                     src={
//                       activeUser?.profilePicture || "theblockchaincoders.jpg"
//                     }
//                     style={{
//                       color: "transparent",
//                       borderRadius: "1000px",
//                       aspectRatio: "1 / 1",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>
//               </a>
//             </div>
//           </div>
//           <div className="c-lmqlYv">
//             <h1>
//               <a>{activeUser?.fullName}</a>
//             </h1>
//             <div className="c-bKKKhl">
//               <div
//                 className="cursor-pointer copy-trigger flex items-center gap-1.5"
//                 data-state="closed"
//               >
//                 <p
//                   onClick={() =>
//                     navigator.clipboard.writeText(activeUser?.address)
//                   }
//                   className="publicAddr publicAddress margin-0 cursor-pointer"
//                 >
//                   {shortenAddress(activeUser?.address)}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-base200 h-[1px] w-full mb-4 !mb-0" />
//         <div className="flex w-full flex-col gap-2">
//           <div className="outline-none focus:outline-none" tabIndex={-1}>
//             <div className="flex h-11 w-full cursor-pointer flex-col gap-y-1 md:h-[54px] md:px-3 md:pt-2 md:hover:bg-neutral50">
//               <p className="min-h-[16px] text-left text-base-m text-base400 md:text-base-s">
//                 {network}
//               </p>
//               <div className="flex w-full items-center justify-between font-base text-base900">
//                 <h3 className="font-title text-title-m font-medium ">
//                   {icoToken?.maticBal.slice(0, 8)} {currency}{" "}
//                   {activeUser?.address.toLowerCase() == icoToken?.address
//                     ? "(Yes)"
//                     : `(NO)`}
//                 </h3>
//               </div>
//             </div>
//           </div>
//           <div className="flex max-md:gap-4 md:gap-2 md:px-2 pb-3">
//             <div className="flex-1">
//               <button
//                 onClick={() => setTokenICO(true)}
//                 className="c-bPnuSX c-bPnuSX-cTUqzc-fullWidth-true c-bPnuSX-SFeiM-size-S c-bPnuSX-iRULOu-variant-tertiary"
//               >
//                 Token ICO
//               </button>
//             </div>
//             <div className="flex-1">
//               <button
//                 onClick={() => setOpenSend(true)}
//                 className="c-bPnuSX c-bPnuSX-cTUqzc-fullWidth-true c-bPnuSX-SFeiM-size-S c-bPnuSX-iRULOu-variant-tertiary"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="bg-base200 h-[1px] w-full mb-4 !mb-2" />
//         <a onClick={() => setopenComponent("Profile")}>
//           <div className="c-cyzOWz">My Profile</div>
//         </a>
//         <a onClick={() => setopenComponent("Explore")}>
//           <div className="c-cyzOWz">Explore</div>
//         </a>
//         <a href="/create">
//           <div className="c-cyzOWz">Create</div>
//         </a>
//         <div
//           onClick={() => LOGOUT()}
//           className="c-eewFZR c-dRdjRq c-eewFZR-hKUpcB-variant-desktop"
//         >
//           Logout
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileMenu;


import React, { useState, useEffect, useContext } from "react";
import { MusicNFTContext } from "../../context/context";
import axios from "axios";
import { shortenAddress } from "../../utils/utils";

const ProfileMenu = ({
  setOpenSend,
  setTokenICO,
  activeUser,
  setopenComponent,
  isWalletConnected // Add this prop
}) => {
  // State Management
  const [icoToken, setIcoToken] = useState();
  const [copySuccess, setCopySuccess] = useState(false);
  const { musicICO, currency, network } = useContext(MusicNFTContext);

  // Fetch ICO Token data
  useEffect(() => {
    const fetchICOData = async () => {
      if (isWalletConnected && activeUser) {
        try {
          const items = await musicICO();
          setIcoToken(items);
        } catch (error) {
          console.error("Failed to fetch ICO data:", error);
        }
      }
    };
    
    fetchICOData();
  }, [isWalletConnected, activeUser]);

  // Handle address copy
  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(activeUser?.address);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `/api/auth/logout`,
        withCredentials: true,
      });

      if (res.status === 200) {
        localStorage.removeItem('walletConnected'); // Clear wallet connection
        window.location.reload();
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // Menu Items configuration
  const menuItems = [
    {
      label: "My Profile",
      onClick: () => setopenComponent("Profile"),
      icon: "👤"
    },
    {
      label: "Explore",
      onClick: () => setopenComponent("Explore"),
      icon: "🔍"
    },
    {
      label: "Create",
      href: "/create",
      icon: "✨"
    }
  ];

  return (
    <div className="fixed right-0 top-[60px] z-50 w-[238px] rounded-md bg-white shadow-lg">
      {/* Profile Header */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <img
              src={activeUser?.profilePicture || "theblockchaincoders.jpg"}
              alt="profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-gray-900">
              {activeUser?.fullName}
            </h1>
            <div 
              className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-600"
              onClick={handleCopyAddress}
            >
              <span>{shortenAddress(activeUser?.address)}</span>
              {copySuccess ? (
                <span className="text-green-500">✓</span>
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2H6z"/>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Balance Section */}
      <div className="border-t border-gray-200 px-4 py-3">
        <p className="text-sm text-gray-600">{network}</p>
        <div className="mt-1 flex items-center justify-between">
          <h3 className="font-medium">
            {icoToken?.maticBal?.slice(0, 8)} {currency}
          </h3>
          <span className="text-sm text-gray-500">
            {activeUser?.address?.toLowerCase() === icoToken?.address
              ? "Owner"
              : "User"}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 border-t border-gray-200 p-4">
        <button
          onClick={() => setTokenICO(true)}
          className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200"
        >
          Token ICO
        </button>
        <button
          onClick={() => setOpenSend(true)}
          className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200"
        >
          Send
        </button>
      </div>

      {/* Menu Items */}
      <div className="border-t border-gray-200">
        {menuItems.map((item, index) => (
          item.href ? (
            <a
              key={index}
              href={item.href}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </a>
          ) : (
            <button
              key={index}
              onClick={item.onClick}
              className="flex w-full items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50"
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
          )
        ))}
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex w-full items-center px-4 py-3 text-left text-red-600 hover:bg-red-50"
      >
        <span className="mr-2">🚪</span>
        Logout
      </button>
    </div>
  );
};

export default ProfileMenu;