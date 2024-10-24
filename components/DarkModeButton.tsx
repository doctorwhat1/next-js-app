import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';

const DarkModeButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<string | null>(null);

  // Check local storage for theme preference on mount
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
    setMounted(true);
  }, []);

  // Toggle theme and store preference in local storage
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (!mounted) return null; // Prevents hydration errors

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-800" />
      )}
    </button>
  );
};

export default DarkModeButton;