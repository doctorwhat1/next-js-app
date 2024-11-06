"use client";

import React from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-200 text-white dark:text-gray-800 px-4 py-2 rounded-lg"
    >
      Toggle Mode
    </button>
  );
};

export default ThemeToggle;