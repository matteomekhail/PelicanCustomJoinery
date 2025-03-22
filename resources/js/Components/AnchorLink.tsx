import React, { useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

interface AnchorLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  preserveState?: boolean;
  preserveScroll?: boolean;
  only?: string[];
  data?: Record<string, any>;
  method?: 'get' | 'post' | 'put' | 'patch' | 'delete';
  replace?: boolean;
  onFinish?: () => void;
  onCancel?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

/**
 * AnchorLink Component
 * 
 * Extends Inertia.js Link to handle same-page anchor navigation
 * Ensures scrolling to the anchor even when the URL doesn't change
 */
const AnchorLink: React.FC<AnchorLinkProps> = ({ 
  href, 
  className, 
  children,
  onClick,
  ...props 
}) => {
  // Check if the URL contains an anchor
  const hasAnchor = href.includes('#');
  
  // Handle initial load scroll if current URL has an anchor
  useEffect(() => {
    // Get the current URL hash
    const hash = window.location.hash;
    if (hash) {
      // Remove the # character
      const id = hash.substring(1);
      // Find the element with the ID
      const element = document.getElementById(id);
      // If element exists, scroll to it
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call the external onClick handler if provided
    if (onClick) {
      onClick(e);
      // If the default is prevented by the external handler, do nothing more
      if (e.defaultPrevented) return;
    }
    
    // Only process if there's an anchor
    if (!hasAnchor) return;
    
    // Get the anchor (without the #)
    const anchor = href.split('#')[1];
    if (!anchor) return;
    
    // Get the current URL without hash
    const currentPath = window.location.pathname;
    // Get the link target path without hash
    const linkPath = href.split('#')[0] || '/';
    
    // Check if we're already on the same page or on home page
    if (
      currentPath === linkPath || 
      (currentPath === '/' && (linkPath === '/' || linkPath === '')) ||
      (currentPath.endsWith('/') && linkPath === currentPath.slice(0, -1)) ||
      (!currentPath.endsWith('/') && linkPath === currentPath + '/')
    ) {
      e.preventDefault();
      
      // Find the target element
      const element = document.getElementById(anchor);
      
      if (element) {
        // Update URL without reloading the page
        window.history.pushState({}, '', href);
        
        // Scroll to the element
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AnchorLink; 