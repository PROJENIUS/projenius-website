import React, { useState } from "react";
import "../assets/css/ChatBot.css";

const ChatBot = () => {
  const [pjChatOpen, setPjChatOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="pj-chatbot-toggle-btn"
        onClick={() => setPjChatOpen(true)}
      >
        <i className="bi bi-robot"></i>
      </button>

      {/* Chat Popup */}
      {pjChatOpen && (
        <div className="pj-chatbot-wrapper">

          {/* Close Button */}
          <button
            className="pj-chatbot-close-btn"
            onClick={() => setPjChatOpen(false)}
            aria-label="Close Chatbot"
          >
            ✖
          </button>

          {/* Chatbot iframe */}
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/Wm-dA3YC_cv_XcaIu3WOD"
            title="Projenius Chatbot"
            className="pj-chatbot-iframe"
            allow="clipboard-write"
          ></iframe>

        </div>
      )}
    </>
  );
};

export default ChatBot;