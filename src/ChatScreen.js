import React, { useState } from 'react';
import './ChatScreen.css';

const ChatScreen = ({ goBack }) => {
  const [messages, setMessages] = useState([
    { text: "Do you have games on your phone?", fromUser: true },
    { text: "Unfortunately I do not have games!", fromUser: false },
    { text: "Why do you not have games?", fromUser: true },
    { text: "Because I am poor :(", fromUser: false },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, fromUser: true }]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="back-button" onClick={goBack}>←</div>
      <div className="chat-header">Messages</div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.fromUser ? 'user' : 'other'}`}
          >
            <div className="chat-avatar">👤</div>
            <div className="chat-text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type the message you wish to send here..."
        />
        <button className="chat-send-button" onClick={handleSend}>➤</button>
      </div>
    </div>
  );
};

export default ChatScreen;