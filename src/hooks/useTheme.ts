import { useEffect } from 'react';

export function useTheme() {
  useEffect(() => {
    // Force dark theme immediately
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return { isDark: true };
}