import React, { useState } from 'react';
import '../assets/css/ChatBot.css';

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button className="chatbot-toggle-btn" onClick={() => setOpen(true)} > <i className="bi bi-robot"></i> </button>

      {/* Chatbot Popup */}
      {open && (
        <div className="chatbot-container">

          {/* Close Button */}
          <button
            className="chatbot-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close Chatbot"
          >
            ✖
          </button>

          {/* Chatbot iframe */}
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/Wm-dA3YC_cv_XcaIu3WOD"
            title="Projenius Chatbot"
            className="chatbot-iframe"
            allow="clipboard-write"
          ></iframe>

        </div>
      )}
    </>
  );
};

export default ChatBot;

