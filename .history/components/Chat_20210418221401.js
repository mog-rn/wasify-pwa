import React, { useEffect, useState } from 'react'
import { useChannel } from './AblyReactEffect'

const ChatComponent = () => {
  let inputBox = null;
  let messageEnd = null;

  const [messageText, setMessageText] = useState("");
  const [receivedMessage, setMessages] = useState();
  const messageTextIsEmpty = messageText.trim().length === 0;

  const history = receive
}