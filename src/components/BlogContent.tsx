"use client";
import 'highlight.js/styles/github-dark.css'; // Add your preferred style
import React, { useEffect, useRef } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import CopyCodeButton from './CopyCodeButton';
import { Root } from 'react-dom/client';

interface BlogContentProps {
  html: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ html }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rootsRef = useRef<Root[]>([]);
  
  // Sanitize HTML string to prevent XSS
  DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    if (node.tagName === 'A' && node.getAttribute('target') === '_blank') {
      node.setAttribute('rel', 'noopener noreferrer');
    }
  });

  const cleanHtml = DOMPurify.sanitize(html, {
    ADD_TAGS: ['iframe'], // Allow iframes for youtube/codepen embeds if needed
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']
  });
  
  useEffect(() => {
    // Clear previous roots when component remounts or html changes
    rootsRef.current.forEach(root => root.unmount());
    rootsRef.current = [];

    const highlightCodeBlocks = async () => {
      if (!containerRef.current) return;
      
      try {
        const hljs = await import('highlight.js');
        const codeBlocks = containerRef.current.querySelectorAll('pre code');
        const { createRoot } = await import('react-dom/client');
        
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
          const codeText = codeElement.textContent || '';
          const root = createRoot(mountPoint);
          root.render(<CopyCodeButton code={codeText} />);
          
          // Save root for cleanup
          rootsRef.current.push(root);
        });
      } catch (error) {
        console.error('Error highlighting code blocks:', error);
      }
    };
    
    highlightCodeBlocks();
    
    return () => {
      // Unmount all roots to prevent memory leaks
      rootsRef.current.forEach(root => {
        setTimeout(() => {
          try {
            root.unmount();
          } catch(e) {}
        }, 0);
      });
      rootsRef.current = [];
    };
  }, [cleanHtml]);
  
  return (
    <div 
      ref={containerRef} 
      className="blog-post" 
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
};

export default BlogContent;
