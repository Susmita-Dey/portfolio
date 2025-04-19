import React, { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface CopyCodeButtonProps {
  code: string;
}

const CopyCodeButton: React.FC<CopyCodeButtonProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      
      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <button 
      className={`copy-code-button ${copied ? 'copied' : ''}`} 
      onClick={handleCopy}
      aria-label="Copy code to clipboard"
    >
      {copied ? (
        <>
          <FaCheck size={12} /> Copied!
        </>
      ) : (
        <>
          <FaCopy size={12} /> Copy
        </>
      )}
    </button>
  );
};

export default CopyCodeButton;