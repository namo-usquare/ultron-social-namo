import React from "react";

//INTERNAL IMPORT
import MusicFeedCard from "./MusicFeedCard";
import { HeartIcon, ChatBubbleLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
const Feed = ({
  allPost,
  setPlayMusic,
  activeUser,
  setOpenComment,
  setReCall,
  reCall,
  setContractId,
  path,
  openComponent,
}) => {
  const reversedPostArray = [...allPost].reverse();
  const [isLiked, setIsLiked] = React.useState(false);


  const posts = [
    {
      id: 1,
      author: '0x1a2b...3c4d',
      content: 'Just posted my first content on BlockSpace! So excited to be part of this decentralized social network.',
      timestamp: '2 hours ago',
      likes: 12,
      comments: 3,
      image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-36280,resizemode-75,msid-87162740/markets/cryptocurrency/most-expensive-bored-ape-nft-sells-for-2-7-million.jpg",

    },
    {
      id: 2,
      author: '0x5e6f...7g8h',
      content: 'The future of social media is here. No more algorithms deciding what you see. No more shadow banning. Just pure, unfiltered content.',
      timestamp: '5 hours ago',
      likes: 45,
      comments: 8,
      image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",

    },
    {
      id: 3,
      author: '0x9i0j...1k2l',
      content: 'Check out my new NFT collection! Minting now on OpenSea. #web3 #nft',
      timestamp: '1 day ago',
      likes: 89,
      comments: 15,
      image: "https://nftnow.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-16-at-4.47.37-PM.png",
    }
  ]
  return (
    <div
      style={{ position: "relative", willChange: "height", height: "100px" }}
    >

          {posts.map(post => (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all shadow-md bg-dark_new" style={{border: "1px solid rgb(0 0 0 / 14%)", marginBottom: "20px"}} key={post.id}>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3 gap-3">
                <div className="rounded-full bg-gradient-to-r from-purple-400 to-pink-500" >
                <img
                    alt="profilePicture"
                    width={40}
                    height={40}
                    src={post.image}
                    style={{
                      color: "transparent",
                      borderRadius: "1000px",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                    }}
                  />
                  </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {post.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.timestamp}
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
      
            <p className="mt-4 text-gray-900 dark:text-white">
              {post.content}
            </p>
      
            <div className="mt-4 flex items-center justify-between  dark:border-gray-700 pt-4" style={{borderTop: "1px solid rgb(0 0 0 / 14%)"}}>
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className="flex items-center space-x-2 text-gray-500 hover:text-pink-500 transition-colors"
              >
                {isLiked ? (
                  <HeartIconSolid className="w-5 h-5 text-pink-500" />
                ) : (
                  <HeartIcon className="w-5 h-5" />
                )}
                <span>{post.likes}</span>
              </button>
      
              <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                <ChatBubbleLeftIcon className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
      
              <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                <ShareIcon className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
          ))}
      
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
        }}
      >
        <div
          data-test-id="virtuoso-item-list"
          style={{
            boxSizing: "border-box",
            paddingTop: "0px",
            paddingBottom: "100px",
            marginTop: "0px",
          }}
        >
          {reversedPostArray?.map((item, index) => (
            <MusicFeedCard
              activeUser={activeUser}
              setPlayMusic={setPlayMusic}
              key={index}
              item={item}
              setOpenComment={setOpenComment}
              setReCall={setReCall}
              reCall={reCall}
              setContractId={setContractId}
              path={path}
              openComponent={openComponent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
