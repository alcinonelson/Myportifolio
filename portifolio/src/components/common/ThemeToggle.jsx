import { useThemeContext } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <i className={`uil ${theme === 'light' ? 'uil-moon' : 'uil-sun'} theme-toggle__icon`}></i>
    </button>
  );
};

export default ThemeToggle;
