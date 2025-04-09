
// import { useState, useEffect } from "react";
// import { useAccount } from 'wagmi';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import axios from "axios";
// import { Email, Password, MetaMass } from "../SVG/index";

// const Wallet = () => {
//   const [authComponent, setAuthComponent] = useState("Login");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [metaMass, setMetaMass] = useState("Create With MetaMask");
//   const [walletConnected, setWalletConnected] = useState(false);

//   const { address, isConnected } = useAccount();

//   useEffect(() => {
//     if (isConnected && address) {
//       setWalletConnected(true);
//       // Check if there's any pending registration
//       const pendingReg = localStorage.getItem('pendingWalletRegistration');
//       if (pendingReg) {
//         const { username, email, password } = JSON.parse(pendingReg);
//         setUsername(username || '');
//         setEmail(email || '');
//         setPassword(password || '');
//       }
//     }
//   }, [isConnected, address]);

//   const LOGIN_USER = async (loginEmail, loginPassword) => {
//     try {
//       const res = await axios({
//         method: "POST",
//         url: "/api/auth/login",
//         data: {
//           email: loginEmail,
//           password: loginPassword,
//         },
//       });
//       window.location.reload();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const REGISTER_USER = async (username, email, password) => {
//     try {
//       const wallet = ethers.Wallet.createRandom();
//       const response = await axios({
//         method: "POST",
//         url: "/api/auth/register",
//         data: {
//           username,
//           email,
//           password,
//           address: wallet.address,
//           privateKey: wallet.privateKey,
//           mnemonic: wallet.mnemonic.phrase,
//         },
//       });
//       setMetaMass("Created successfully");
//       window.location.reload();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const METAMASS_USER = async (username, email, password, address) => {
//     if (!username || !email || !password) {
//       alert("Please fill all fields first");
//       return;
//     }

//     // Save current form data
//     const formData = { username, email, password, address };
//     localStorage.setItem('pendingWalletRegistration', JSON.stringify(formData));

//     try {
//       setMetaMass("Creating...");
//       const response = await axios({
//         method: "POST",
//         url: "/api/auth/register",
//         data: {
//           username,
//           email,
//           password,
//           address,
//           privateKey: "Check your metamask for PrivateKey",
//           mnemonic: "Not Available, Private to you",
//         },
//       });
      
//       // Clear pending registration on success
//       localStorage.removeItem('pendingWalletRegistration');
//       setMetaMass("Created successfully");
//       window.location.reload();
//     } catch (err) {
//       console.log(err);
//       // Keep wallet connection but show error
//       setMetaMass("API Failed - Wallet Still Connected");
      
//       // Retry registration after 3 seconds
//       setTimeout(() => {
//         setMetaMass("Retry Registration");
//       }, 3000);
//     }
//   };

//   return (
//     <div className="form_container">
//       <div className="login_background"></div>
//       <div className="logo_container">
//         <img src="/theblockchaincoders.jpg" alt="" />
//       </div>
//       <div className="title_container">
//         {authComponent == "Login" ? (
//           <p className="title">Login to your Account</p>
//         ) : (
//           <p className="title">Sign Up / Create Wallet</p>
//         )}
//         <span className="subtitle">
//           Get started with our app, just create an account and enjoy the experience.
//         </span>
//       </div>
//       <br />

//       {authComponent == "Login" ? (
//         <>
//           <div className="input_container">
//             <label className="input_label">Email</label>
//             <Email />
//             <input
//               placeholder="your@mail.com"
//               type="text"
//               className="input_field"
//               onChange={(e) => setLoginEmail(e.target.value)}
//             />
//           </div>
//           <div className="input_container">
//             <label className="input_label">Password</label>
//             <Password />
//             <input
//               placeholder="Password"
//               type="password"
//               className="input_field"
//               onChange={(e) => setLoginPassword(e.target.value)}
//             />
//           </div>
//           <button
//             onClick={() => LOGIN_USER(loginEmail, loginPassword)}
//             className="sign-in_btn"
//           >
//             <span>Login In</span>
//           </button>
//         </>
//       ) : (
//         <>
//           <div className="input_container">
//             <label className="input_label">Username</label>
//             <Email />
//             <input
//               placeholder="username"
//               type="text"
//               className="input_field"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="input_container">
//             <label className="input_label">Email</label>
//             <Email />
//             <input
//               placeholder="your@mail.com"
//               type="text"
//               className="input_field"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="input_container">
//             <label className="input_label">Password</label>
//             <Password />
//             <input
//               placeholder="Password"
//               type="password"
//               className="input_field"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             title="Sign In"
//             onClick={() => REGISTER_USER(username, email, password)}
//             className="sign-in_btn"
//           >
//             <span>Create Account</span>
//           </button>
//         </>
//       )}

//       {authComponent == "Sign Up" && (
//         <div className="separator">
//           <hr className="line" />
//           <span>Or</span>
//           <hr className="line" />
//         </div>
//       )}

//       {authComponent == "Sign Up" && (
//         <>
//           <div className="wallet-connect">
//             <ConnectButton 
//               label="Connect Wallet"
//               accountStatus="address"
//               chainStatus="none"
//               showBalance={false}
//             />
//           </div>

//           {isConnected && address && (
//             <button
//               onClick={() => METAMASS_USER(username, email, password, address)}
//               className="sign-in_apl"
//             >
//               <span>{metaMass}</span>
//             </button>
//           )}
//         </>
//       )}

//       {authComponent == "Login" ? (
//         <p onClick={() => setAuthComponent("Sign Up")} className="note">
//           Create Account &amp; Sign Up
//         </p>
//       ) : (
//         <p onClick={() => setAuthComponent("Login")} className="note">
//           Create Account &amp; Login
//         </p>
//       )}
//     </div>
//   );
// };

// export default Wallet;





import { useState, useEffect } from "react";
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import axios from "axios";
import { ethers } from "ethers";
import { Email, Password } from "../SVG/index";
import toast from "react-hot-toast";

const Wallet = () => {
  const [authComponent, setAuthComponent] = useState("Login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [metaMass, setMetaMass] = useState("Create With MetaMask");
  const [walletConnected, setWalletConnected] = useState(false);

  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      setWalletConnected(true);
      const pendingReg = localStorage.getItem('pendingWalletRegistration');
      if (pendingReg) {
        const { username, email, password } = JSON.parse(pendingReg);
        setUsername(username || '');
        setEmail(email || '');
        setPassword(password || '');
      }
    }
  }, [isConnected, address]);

  // Redirect to home page when wallet is connected (Temporary redirect until API works)
  // Add effect to handle successful wallet connection
  useEffect(() => {
    if (isConnected && address) {
      console.log("Connected Wallet Address:", address);
      setWalletConnected(true);
      // Set wallet connection in localStorage
      localStorage.setItem('walletConnected', 'true');
      
      // If user is already logged in (has token), redirect
      const token = Cookies.get("token");
      if (token) {
        Cookies.set('token', token); // Refresh token
        window.location.reload();
      }
    }
  }, [isConnected, address]);
  

// End of temporary wallet connect redirect

  
// End of temporary wallet connect redirect


  const LOGIN_USER = async (loginEmail, loginPassword) => {
    try {
      const res = await axios({
        method: "POST",
        url: "/api/auth/login",
        data: {
          email: loginEmail,
          password: loginPassword,
        },
      });
      localStorage.setItem('authToken', res.data.token);
      localStorage.setItem('userData', JSON.stringify(res.data.user));
      window.location.href = '/create';
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  const REGISTER_USER = async (username, email, password) => {
    try {
      const wallet = ethers.Wallet.createRandom();
      const response = await axios({
        method: "POST",
        url: "/api/auth/register",
        data: {
          username,
          email,
          password,
          address: wallet.address,
          privateKey: wallet.privateKey,
          mnemonic: wallet.mnemonic.phrase,
        },
      });
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('userData', JSON.stringify(response.data.user));
      window.location.href = '/create';
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  // const METAMASS_USER = async (username, email, password, address) => {
  //   if (!username || !email || !password) {
  //     toast.error("Please fill all fields first");
  //     return;
  //   }

  //   try {
  //     setMetaMass("Creating...");
  //     const response = await axios({
  //       method: "POST",
  //       url: "/api/auth/register",
  //       data: {
  //         username,
  //         email,
  //         password,
  //         address,
  //         privateKey: "Check your metamask for PrivateKey",
  //         mnemonic: "Not Available, Private to you",
  //       },
  //     });
  //     localStorage.setItem('authToken', response.data.token);
  //     localStorage.setItem('userData', JSON.stringify(response.data.user));
  //     localStorage.setItem('walletAddress', address);
  //     setMetaMass("Created successfully");
  //     window.location.href = '/create';
  //   } catch (err) {
  //     setMetaMass("API Failed - Wallet Still Connected");
  //     setTimeout(() => {
  //       setMetaMass("Retry Registration");
  //     }, 3000);
  //     toast.error(err.response?.data?.message || "Wallet registration failed");
  //   }
  // };


  // Modify METAMASS_USER function
  const METAMASS_USER = async (username, email, password, address) => {

    if (!username || !email || !password) {
      toast.error("Please fill all fields first");
      return;
    }

   
  try {
    setMetaMass("Creating...");
    const response = await axios({
      method: "POST",
      url: "/api/auth/register",
      data: {
        username,
        email,
        password,
        address,
        privateKey: "Check your metamask for PrivateKey",
        mnemonic: "Not Available, Private to you",
      },
    });

    // Set both token and wallet connection
    Cookies.set('token', response.data.token);
    localStorage.setItem('walletConnected', 'true');
    localStorage.setItem('userData', JSON.stringify(response.data.user));
    
    setMetaMass("Created successfully");
    window.location.reload();
  } catch (err) {
    setMetaMass("Registration failed");
    console.error(err);
  }
  };
  

  return (
    <div className="form_container">
      <div className="login_background"></div>
      <div className="logo_container">
        <img src="/theblockchaincoders.jpg" alt="" />
      </div>
      <div className="title_container">
        {authComponent == "Login" ? (
          <p className="title">Login to your Account</p>
        ) : (
          <p className="title">Sign Up / Create Wallet</p>
        )}
        <span className="subtitle">
          Get started with our app, just create an account and enjoy the experience.
        </span>
      </div>
      <br />
      {authComponent == "Login" ? (
        <>
          <div className="input_container">
            <label className="input_label">Email</label>
            <Email />
            <input
              placeholder="your@mail.com"
              type="text"
              className="input_field"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="input_container">
            <label className="input_label">Password</label>
            <Password />
            <input
              placeholder="Password"
              type="password"
              className="input_field"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button
            onClick={() => LOGIN_USER(loginEmail, loginPassword)}
            className="sign-in_btn"
          >
            <span>Login In</span>
          </button>
        </>
      ) : (
        <>
          <div className="input_container">
            <label className="input_label">Username</label>
            <Email />
            <input
              placeholder="username"
              type="text"
              className="input_field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input_container">
            <label className="input_label">Email</label>
            <Email />
            <input
              placeholder="your@mail.com"
              type="text"
              className="input_field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_container">
            <label className="input_label">Password</label>
            <Password />
            <input
              placeholder="Password"
              type="password"
              className="input_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            title="Sign In"
            onClick={() => REGISTER_USER(username, email, password)}
            className="sign-in_btn"
          >
            <span>Create Account</span>
          </button>
        </>
      )}

      {authComponent == "Sign Up" && (
        <div className="separator">
          <hr className="line" />
          <span>Or</span>
          <hr className="line" />
        </div>
      )}

      {authComponent == "Sign Up" && (
        <>
          <div className="wallet-connect">
            <ConnectButton 
              label="Connect Wallet"
              accountStatus="address"
              chainStatus="none"
              showBalance={false}
            />
          </div>

          {isConnected && address && (
            <button
              onClick={() => METAMASS_USER(username, email, password, address)}
              className="sign-in_apl"
            >
              <span>{metaMass}</span>
            </button>
          )}
        </>
      )}

      {authComponent == "Login" ? (
        <p onClick={() => setAuthComponent("Sign Up")} className="note">
          Create Account &amp; Sign Up
        </p>
      ) : (
        <p onClick={() => setAuthComponent("Login")} className="note">
          Create Account &amp; Login
        </p>
      )}
    </div>
  );
};

export default Wallet;