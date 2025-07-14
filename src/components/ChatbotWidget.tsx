import React, { useRef, useEffect, useState } from 'react';

const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const iframeRef = useRef<HTMLDivElement>(null);

  // Close the chatbot if user clicks outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        open &&
        iframeRef.current &&
        btnRef.current &&
        !iframeRef.current.contains(e.target as Node) &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <>
      {/* Floating Chatbot Button */}
      <button
        ref={btnRef}
        aria-label="Open chat"
        onClick={() => setOpen((v) => !v)}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 9999,
          background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
          border: 'none',
          borderRadius: '50%',
          width: 64,
          height: 64,
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {/* Attractive custom chat icon */}
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bubble-gradient" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#a5b4fc"/>
              <stop offset="100%" stopColor="#6366f1"/>
            </radialGradient>
            <filter id="bubble-shadow" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#6366f1" floodOpacity="0.18"/>
            </filter>
          </defs>
          <g filter="url(#bubble-shadow)">
            <ellipse cx="18" cy="18" rx="16" ry="16" fill="url(#bubble-gradient)"/>
            <path d="M11 15c0-2.21 2.24-4 5-4h4c2.76 0 5 1.79 5 4v4c0 2.21-2.24 4-5 4h-2l-3 3v-3c-2.76 0-5-1.79-5-4v-4z" fill="white"/>
            <circle cx="15" cy="18" r="1.2" fill="#6366f1"/>
            <circle cx="18" cy="18" r="1.2" fill="#6366f1"/>
            <circle cx="21" cy="18" r="1.2" fill="#6366f1"/>
          </g>
        </svg>
      </button>
      {/* Chatbot Iframe Popup */}
      {open && (
        <div
          ref={iframeRef}
          style={{
            position: 'fixed',
            bottom: 104,
            right: 32,
            zIndex: 9999,
            width: 370,
            maxWidth: '95vw',
            height: 600,
            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            borderRadius: 18,
            overflow: 'hidden',
            background: 'white',
            animation: 'fadeInUp 0.25s',
          }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/ln6K3DA-O958Kddcd6-kt"
            width="100%"
            height="100%"
            style={{ border: 'none', minHeight: 600, borderRadius: 18 }}
            allow="clipboard-write"
            title="Chatbot"
          ></iframe>
        </div>
      )}
      {/* Simple fadeInUp animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default ChatbotWidget;
