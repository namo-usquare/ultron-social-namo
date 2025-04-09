// import React from "react";

// const Navbar = ({ setOpenMenu, openMenu, activeUser }) => {
//   return (
//     <ul className="flex list-none items-center">
//       <div className="flex-end ml-4 flex h-10 w-full items-center gap-3">
//         <button type="button">
//           <div className="h-7 w-7 md:h-10 md:w-10">
//             <div className="relative w-[40px]">
//               <div className="c-hrywGi c-hrywGi-iloIMzw-css">
//                 <img
//                   onClick={() =>
//                     openMenu ? setOpenMenu(false) : setOpenMenu(true)
//                   }
//                   alt="profilePicture"
//                   width={40}
//                   height={40}
//                   src={activeUser?.profilePicture || "theblockchaincoders.jpg"}
//                   style={{
//                     color: "transparent",
//                     borderRadius: "1000px",
//                     aspectRatio: "1 / 1",
//                     objectFit: "cover",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </button>
//       </div>
//     </ul>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { useDisconnect } from 'wagmi'

const Navbar = ({ 
  setOpenMenu, 
  openMenu, 
  activeUser,
  isWalletConnected,
  walletAddress,
  onWalletConnect 
}) => {
  const { disconnect } = useDisconnect()
  const [showDropdown, setShowDropdown] = useState(false);
  // Wallet connection handler
  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        // Pass the connected address to parent
        onWalletConnect(accounts[0]);
      } else {
        alert('Please install MetaMask!');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <ul className="flex list-none items-center">
      <div className="flex-end ml-4 flex h-10 w-full items-center gap-3">
        {/* Wallet Connection Section */}
        {isWalletConnected ? (
          // Show wallet address when connected
          <div className="wallet-address px-4 py-2 bg-gray-100 rounded-full text-sm">
            {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
          </div>
        ) : (
          // Show connect button when not connected
          <button 
            onClick={connectWallet}
            className="connect-button px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Connect Wallet
          </button>
        )}

        

        {/* Profile Picture - Only visible when wallet is connected */}
        {/* {isWalletConnected && (
          <button type="button">
            <div className="h-7 w-7 md:h-10 md:w-10">
              <div className="relative w-[40px]">
                <div className="c-hrywGi c-hrywGi-iloIMzw-css">
                  <img
                    onClick={() => setOpenMenu(!openMenu)}
                    alt="profilePicture"
                    width={40}
                    height={40}
                    src={activeUser?.profilePicture || "theblockchaincoders.jpg"}
                    style={{
                      color: "transparent",
                      borderRadius: "1000px",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </button>
          
        )} */}
        {isWalletConnected && (
          <div className="relative">
            <button type="button">
              <div className="h-7 w-7 md:h-10 md:w-10">
                <div className="relative w-[40px]">
                  <div className="c-hrywGi c-hrywGi-iloIMzw-css">
                    <img
                      onClick={() => setShowDropdown(!showDropdown)}
                      alt="profilePicture"
                      width={40}
                      height={40}
                      // src={activeUser?.profilePicture || "theblockchaincoders.jpg"}
                      src="https://nftnow.com/wp-content/uploads/2022/05/Bored-Ape.png"
                      style={{
                        color: "transparent",
                        borderRadius: "1000px",
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button 
                    onClick={() => {
                      disconnect();
                      setShowDropdown(false);
                    }}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </ul>
  );
};

export default Navbar;