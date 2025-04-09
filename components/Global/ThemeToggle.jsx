import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../utils/ThemeProvider';
import { useEffect } from 'react';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    // Check localStorage on mount
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    toggleTheme();
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button
      onClick={handleThemeToggle}
      className={`p-2 rounded-full transition-colors duration-200 dark_button ${
        isDarkMode 
          ? 'bg-gray-800 hover:bg-gray-700' 
          : 'bg-gray-200 hover:bg-gray-300'
      } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isDarkMode ? 'focus:ring-yellow-500' : 'focus:ring-gray-500'
      }`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <FaSun 
          className="w-5 h-5 text-yellow-300 transition-all duration-300 transform hover:scale-110" 
          aria-hidden="true"
        />
      ) : (
        <FaMoon 
          className="w-5 h-5 text-gray-800 transition-all duration-300 transform hover:scale-110" 
          aria-hidden="true"
        />
      )}
    </button>
  );
}