import React from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import {
  Logo,
  ImgLogo,
  Home,
  Home2,
  Line,
  Line2,
  Explore,
  Explore2,
  Notification,
  Notification2,
  User,
  User2,
  Plus,
  Plus2,
} from "../SVG/index";
import Menu from "./Menu";
import MenuIcon from "./MenuIcon";
import Channels from "./Channels";

const dummyUsers = [
  {
    name: "Alice Johnson",
    address: "0x12ab34cd56ef78gh90ij12kl34mn56op78qr90st",
    image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-36280,resizemode-75,msid-87162740/markets/cryptocurrency/most-expensive-bored-ape-nft-sells-for-2-7-million.jpg",
  },
  {
    name: "Bob Smith",
    address: "0xabcdef1234567890abcdef1234567890abcdef12",
    image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
  },
  {
    name: "Charlie Brown",
    address: "0x98ba76dc54fe32hg10kj98lm76no54pq32rs10tu",
    image: "https://nftnow.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-16-at-4.47.37-PM.png",
  },
  {
    name: "Daisy Ray",
    address: "0x1111222233334444555566667777888899990000",
    image: "https://nftnow.com/wp-content/uploads/2022/05/Bored-Ape.png",
  },
  {
    name: "Ethan Wright",
    address: "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    image: "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/67a65320ee3a0df90701f857_TPunk%20%233442.webp",
  },
  {
    name: "Fiona Lee",
    address: "0xbeefcafe1234567890abcdefabcdefabcdefabcd",
    image: "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/67a652cef390d370621941ca_CryptoPunk%20%234156.webp",
  },
  {
    name: "George Hill",
    address: "0x1234567890abcdef1234567890abcdef12345678",
    image: "https://nftnow.com/wp-content/uploads/2022/05/Bored-Ape.png",
  },
  {
    name: "Hannah Adams",
    address: "0xcafebabecafebabecafebabecafebabecafebabe",
    image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
  },
];


const Sidebar = ({
  setopenComponent,
  openComponent,
  setOpenBox,
  openBox,
  allArtist,
}) => {
  const router = useRouter();

  const menu = [
    {
      name: "Home",
      icon: <Home />,
      handleClick: "",
    },
    {
      name: "Invite",
      icon: <Line />,
      handleClick: "",
    },
    {
      name: "Explore",
      icon: <Explore />,
      handleClick: "",
    },
    {
      name: "Notifications",
      icon: <Notification />,
      handleClick: "",
    },
    {
      name: "Profile",
      icon: <User />,
      handleClick: "",
    },
  ];
  return (
    <div className="c-iQOEWc dark:bg-gray-800">
      <div className="flex cursor-pointer flex-col gap-6 px-3 py-4 lt:px-4">
        <a className="flex items-center gap-2" href="/">
          <ImgLogo />
        </a>
        <div className="flex flex-col items-center gap-1.5 lt:items-start">
          <div className="expanded-header hidden w-full flex-col gap-3 lt:flex">
            {menu.map((item, index) => (
              <Menu
                icon={item.icon}
                name={item.name}
                path={router?.pathname}
                setopenComponent={setopenComponent}
              />
            ))}

            <div type="button" className="outline-0">
              <div className="flex pt-3">
                <button
                  onClick={() => router.push("/create")}
                  className="c-bPnuSX c-bPnuSX-cTUqzc-fullWidth-true c-bPnuSX-cMJTpp-size-L c-bPnuSX-UazGY-hasIcon-true c-bPnuSX-kiaVWo-variant-primary rounded-full"
                >
                  <div className="flex items-center mr-2">
                    <Plus />
                  </div>
                  Create
                </button>
              </div>
              <div className="hidden pt-3">
                <button
                  onClick={() =>
                    openComponent
                      ? setopenComponent(true)
                      : setopenComponent(false)
                  }
                  className="c-ebvTKE c-ebvTKE-isdEXf-variant-primary c-ebvTKE-ibJzEHE-css rounded-full bg-base800"
                >
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center [&_svg]:h-[16px]">
                    <Plus />
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-base200 h-[1px] w-full mb-4 !mb-3 mt-4" />
            <div className="w-full">
              <div className="mb-4 flex items-center justify-between">
                {router.path == "/create" && (
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap font-base text-[12px] uppercase leading-[14px] text-base500">
                    Tops Profiles
                  </span>
                )}
              </div>
              {/* <div className="mt-3 flex flex-col gap-4">
                {allArtist
                  ?.map((item, index) => (
                    <Channels
                      image={item?.profilePicture || "/theblockchaincoders.jpg"}
                      name={item?.fullName || `@${item?.username}`}
                      address={item?.address}
                      userId={item?._id}
                      verify={item?.verify}
                    />
                  ))
                  .slice(0, 6)}
              </div> */}
            
                  {dummyUsers.map((user, index) => (
                      <div className=" mt-3">
                      <Channels
                        key={index}
                        name={user.name}
                        address={user.address}
                        image={user.image}
                      />
                          </div>
                    ))}
          
              
            
            </div>
          </div>
          <div className="collapsed-header flex flex-col gap-3 lt:hidden">
            <MenuIcon icon={<Home2 />} />
            <MenuIcon icon={<Line2 />} />
            <MenuIcon icon={<Explore2 />} />
            <a className="relative flex h-[46px] items-center justify-center py-2">
              <div className="absolute inline-block rounded-full bg-fuchsia500 align-super right-1 top-[5px] h-2 w-2" />
              <Notification2 />
            </a>
            <MenuIcon icon={<User2 />} />

            <div type="button" className="outline-0">
              <div className="hidden pt-3">
                <button
                  onClick={() => router.push("/create")}
                  className="c-bPnuSX c-bPnuSX-cTUqzc-fullWidth-true c-bPnuSX-cMJTpp-size-L c-bPnuSX-UazGY-hasIcon-true c-bPnuSX-kiaVWo-variant-primary rounded-full"
                >
                  <div className="flex items-center mr-2">
                    <Plus2 />
                  </div>
                  Create
                </button>
              </div>
              <div className="flex pt-3">
                <button className="c-ebvTKE c-ebvTKE-isdEXf-variant-primary c-ebvTKE-ibJzEHE-css rounded-full bg-base800">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center [&_svg]:h-[16px]">
                    <Plus2 />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
