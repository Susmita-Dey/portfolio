"use client";

import { CopyIcon } from '@radix-ui/react-icons';
import { useState, useRef, useEffect } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface CopyCodeButtonProps {
  code: string;
}

const CopyCodeButton = ({ code }: CopyCodeButtonProps) => {
  const [copied, setCopied] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center absolute top-0 right-0 gap-2 p-2 text-base font-mono transition-all ${
        copied
          ? 'text-green-500'
          : 'text-gray-400 hover:text-white hover:bg-gray-700'
      }`}
      aria-label="Copy code"
    >
      {copied ? (
        <>
          <FaCheck className="inline" />Copied!
        </>
      ) : (
        <>
          <CopyIcon className="inline" />Copy
        </>
      )}
    </button>
  );
};

export default CopyCodeButton;