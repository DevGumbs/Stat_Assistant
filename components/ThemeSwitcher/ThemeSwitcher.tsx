import React from 'react';
import { useMode } from '@/components/ModeContext/ModeContext';

const ThemeSwitcher = () => {
  const { isDarkMode, toggleMode } = useMode();

  const handleToggle = () => {
    toggleMode();
    document.documentElement.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className="flex items-center">
      <span className="ml-[10px] mr-[5px]">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </span>
      <label className="relative inline-block w-[50px] h-[20px]">
        <input 
          id="checkboxInput" 
          type="checkbox" 
          className="w-0 h-0 opacity-0" 
          onClick={handleToggle} 
          checked={isDarkMode}
          readOnly
        />
        <span id="slider"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
