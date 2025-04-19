"use client";
import 'highlight.js/styles/github-dark.css'; // Add your preferred style
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
        const hljs = await import('highlight.js');
        
        const codeBlocks = containerRef.current.querySelectorAll('pre code');
        
        codeBlocks.forEach((block) => {
          // Type assertion for HTMLElement
          const codeElement = block as HTMLElement;
          hljs.default.highlightElement(codeElement);
          
          const preElement = codeElement.parentElement;
          if (!preElement) return;
          
          // Add language class
          const language = Array.from(codeElement.classList)
            .find(cls => cls.startsWith('language-'))
            ?.replace('language-', '');
            
          if (language) {
            preElement.dataset.language = language;
          }

          // Check if copy button already exists
          if (preElement.querySelector('.copy-code-wrapper')) return;
          
          // Create button container
          const copyButtonWrapper = document.createElement('div');
          copyButtonWrapper.className = 'copy-code-wrapper';
          
          // Create mount point with unique ID
          const mountPoint = document.createElement('div');
          mountPoint.className = 'copy-code-mount';
          copyButtonWrapper.appendChild(mountPoint);
          
          // Insert at beginning of pre element
          preElement.insertBefore(copyButtonWrapper, preElement.firstChild);
          
          // Render React component
          import('react-dom/client').then(({ createRoot }) => {
            const codeText = codeElement.textContent || '';
            const root = createRoot(mountPoint);
            root.render(<CopyCodeButton code={codeText} />);
          });
        });
      } catch (error) {
        console.error('Error highlighting code blocks:', error);
      }
    };
    
    highlightCodeBlocks();
    
    return () => {
      // Cleanup handled automatically by React's unmount
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
