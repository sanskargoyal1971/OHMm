import React from 'react';
import './TextBlock.css'; // Add your styles here

const TextBlock = ({ message, response }) => {
  return (
    <div className="text-block">
      <div className="user-message">
        <p><strong>User:</strong> {message}</p>
      </div>
      {response && (
        <div className="bot-response">
          <p><strong>Bot:</strong> {response}</p>
        </div>
      )}
    </div>
  );
};

export default TextBlock;
