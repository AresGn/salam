import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Link({ href, children, className = '', onClick }: LinkProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHash = href.startsWith('#');
  const target = isHash && location.pathname !== '/' ? `/${href}` : href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();

    if (!isHash) {
      navigate(href);
      return;
    }

    // Section anchors live on the portfolio home page: go there first when on another page.
    if (location.pathname !== '/') {
      navigate(`/${href}`);
      return;
    }

    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      href={target}
      onClick={handleClick}
      className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}
