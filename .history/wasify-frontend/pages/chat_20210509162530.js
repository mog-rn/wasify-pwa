import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react'
import 'stream-chat-react/dist/css/index.css'


chatClient.connectUser({
  id: "dark-darkness-3",
  name: "dark-darkness-3",
  image:
    "https://getstream.io/random_png/?id=dark-darkness-3&name=dark-darkness-3",
},
userToken,
);

const channel = chatClient.channel("messaging", "dark-darkness-3", {
  //add custom fields as you'd like
  image: "https://www.drupal.org/files/project-images/react.png",
  name: "Talk about React",
  members: ["dark-darkness-3"],
});

var stream = require("getstream");
  // Instantiate a new client (server side)
  client = stream.connect(
    "ta76zvxu6w4b",
    "rka4mspg2aye7ut8wtyz8b7zff6sd3zd6cuzwjpx46qd4b3aambpbd8vytb4ppwx",
    "1123757"
  );
  // Instantiate a new client (client side)
  client = stream.connect("ta76zvxu6w4b", null, "1123757");
  // Find your API keys here https://getstream.io/dashboard/

  

const Chatt = () => {
  
  return (
    <>
      <Chat client={chatClient} theme="messaging light">
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </>
  );
};

export default Chatt