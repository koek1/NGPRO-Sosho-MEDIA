import React, { useState } from 'react';
import './MessagesDash.css';
import ChatScreen from './ChatScreen'; 

const MessagesDash = () => {
  const [showChat, setShowChat] = useState(false);

  const messages = [
    "Do you have games on your phone?",
    "Hello my fren plees send bobs and vagene!",
    "Did you get the drugs bro?",
    "I am BATMAN!!!!!!!!!!!!!!!!!!!",
    "Have you ever heard of Imagine Dragons?",
  ];

  const openChat = () => {
    setShowChat(true);
  };

  const goBack = () => {
    setShowChat(false);
  };

  if (showChat) {
    return <ChatScreen goBack={goBack} />;
  }

  return (
    <div className="messages-container">
      <div className="back-button">←</div>
      <div className="messages-header">Messages</div>
      {messages.map((message, index) => (
        <div key={index} className="message" onClick={openChat}>
          <div className="user-avatar">👤</div>
          <div className="message-text">{message}</div>
        </div>
      ))}
    </div>
  );
};

export default MessagesDash;
