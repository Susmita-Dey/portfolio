// components/BlogContent.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import CopyCodeButton from './CopyCodeButton';

interface BlogContentProps {
  html: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ html }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const highlightCodeBlocks = async () => {
      if (!containerRef.current) return;
      
      try {
        // Dynamically import highlight.js to avoid SSR issues
        const hljs = await import('highlight.js');
        
        // Find all code blocks in the container
        const codeBlocks = containerRef.current.querySelectorAll('pre code');
        
        codeBlocks.forEach((block) => {
          // Apply syntax highlighting
          hljs.default.highlightElement(block as HTMLElement);
          
          // Get the parent pre element
          const preElement = block.parentElement;
          if (!preElement) return;
          
          // Add language label if detected
          const language = block.className.match(/language-(\w+)/)?.[1];
          if (language) {
            preElement.setAttribute('data-language', language);
          }
          
          // Create and add copy button
          const copyButton = document.createElement('div');
          copyButton.className = 'code-block-header';
          
          // Create a container for the copy button React component
          const copyButtonContainer = document.createElement('div');
          copyButtonContainer.id = `copy-button-${Math.random().toString(36).substring(2, 11)}`;
          copyButton.appendChild(copyButtonContainer);
          
          // Add the copy button to the pre element
          preElement.appendChild(copyButton);
          
          // Render the React copy button component inside the container
          const codeText = block.textContent || '';
          
          // We need to use ReactDOM to render the React component inside the dynamically created container
          import('react-dom/client').then(({ createRoot }) => {
            const root = createRoot(copyButtonContainer);
            root.render(<CopyCodeButton code={codeText} />);
          });
        });
      } catch (error) {
        console.error('Error highlighting code blocks:', error);
      }
    };
    
    highlightCodeBlocks();
    
    // Clean up function
    return () => {
      if (containerRef.current) {
        // Clean up any React components that were mounted
        containerRef.current.querySelectorAll('.code-block-header').forEach((header) => {
          if (header.firstChild && header?.firstChild?.id) {
            try {
              // This is a simplistic cleanup - in a real app, you'd use proper unmounting
              header.remove();
            } catch (e) {
              console.error('Error cleaning up code block header:', e);
            }
          }
        });
      }
    };
  }, [html]);
  
  return (
    <div 
      ref={containerRef} 
      className="blog-post" 
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default BlogContent;